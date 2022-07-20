import { signTransaction } from "@stellar/freighter-api";

export const stellarUserSignTransaction = async ({
  xdr,
  network,
  publicKey,
}: {
  xdr: string;
  network?: "PUBLIC" | "TESTNET" | null;
  publicKey?: string;
}) => {
  let signedTransaction = "";
  let error = "";

  try {
    signedTransaction = await signTransaction(xdr, network, publicKey);
  } catch (e) {
    error = e;
  }

  if (error) {
    return error;
  }

  return signedTransaction;
};
