import {
  Asset,
  FederationServer,
  Networks,
  Server,
  ServerApi,
  TransactionBuilder,
} from "stellar-sdk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BigNumber from "bignumber.js";

import { config } from "config/config_testnet";

import { buildStellarTransaction } from "helpers/buildStellarTransaction";
import { getFreighterPublicKey } from "helpers/getFreighterPublicKey";
import { stellarUserSignTransaction } from "helpers/stellarUserSignTransaction";

// https://developers.stellar.org/docs/tutorials/send-and-receive-payments/#send-a-payment

export const sendPayment = createAsyncThunk(
  "payment/SEND_PAYMENT",
  async ({
    amount,
    shopOwnerPubKey,
  }: {
    amount: BigNumber;
    shopOwnerPubKey: string;
  }) => {
    const server = new Server(config.stellarHorizonUrl);
    const asset = new Asset(
      config.stellarTokens.USDC.code,
      config.stellarTokens.USDC.issuer.key,
    );
    const buyerSourceAccount = await getFreighterPublicKey();

    let destination: string = "";

    try {
      const federationResponse = await FederationServer.resolve(
        shopOwnerPubKey,
      );
      destination = federationResponse.account_id;
    } catch (error) {
      console.error("error: ", error);
    }

    const transaction = await buildStellarTransaction({
      sourceAccount: buyerSourceAccount,
      destination,
      amount: amount.toString(),
      asset,
    });

    const transactionToXdr = transaction.toXDR();

    if (transactionToXdr) {
      const userSignedTransaction = await stellarUserSignTransaction({
        xdr: transactionToXdr,
        network: config.stellarNetwork,
      });

      const transactionToSubmit = TransactionBuilder.fromXDR(
        userSignedTransaction,
        Networks.TESTNET,
      );

      const response = await server.submitTransaction(transactionToSubmit);

      return response;
    }
    return {};
  },
);

export interface PaymentState {
  paymentTransactionResult: ServerApi.TransactionRecord | {};
  isSuccessful: boolean;
}

const initialState = {
  paymentTransactionResult: {},
  isSuccessful: false,
} as PaymentState;

const slice = createSlice({
  name: "sendPayment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(sendPayment.fulfilled, (state, action) => {
      // Add user to the state array
      state.isSuccessful = true;
      state.paymentTransactionResult = action.payload;
    });
  },
});

export const { reducer } = slice;
