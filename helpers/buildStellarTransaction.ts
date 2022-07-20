import {
  AccountResponse,
  Asset,
  BASE_FEE,
  Memo,
  Operation,
  Server,
  TransactionBuilder,
} from "stellar-sdk";

import { config } from "config/config_testnet";

export const buildStellarTransaction = async ({
  sourceAccount,
  destination,
  amount,
  asset,
}: {
  sourceAccount: string;
  destination: string;
  amount: string;
  asset: Asset;
}) => {
  let latestAccount: AccountResponse;
  let timebounds: Server.Timebounds;
  const server = new Server(config.stellarHorizonUrl);

  console.log("sourceAccount:", sourceAccount);

  [latestAccount, timebounds] = await Promise.all([
    server.loadAccount(sourceAccount),
    server.fetchTimebounds(60 * 5),
  ]);

  console.log("latestAccount:", latestAccount);
  console.log("timebounds", timebounds);

  const transaction = new TransactionBuilder(latestAccount, {
    fee: BASE_FEE,
    networkPassphrase: config.stellarNetworkPassphrase,
    timebounds,
  })
    .addOperation(
      Operation.payment({
        destination,
        asset,
        amount,
      }),
    )
    .addMemo(Memo.text("Shopping Transaction Example"))
    .build();

  console.log("transaction: ", transaction);

  return transaction;
};
