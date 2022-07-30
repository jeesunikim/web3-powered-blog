import {
  useAccount,
  useEnsAvatar as wagmiUseEnsAvatar,
  useEnsName,
} from "wagmi";

export const useEnsAvatar = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({
    address: address,
  });

  const { data: ensAvatar } = wagmiUseEnsAvatar({
    addressOrName: ensName || undefined,
  });

  return ensAvatar;
};
