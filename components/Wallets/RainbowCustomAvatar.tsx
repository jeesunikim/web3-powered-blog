import { AvatarComponent } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import { useEnsAvatar } from "hooks/useEnsAvatar";

export const RainbowCustomAvatar: AvatarComponent = ({ ensImage, size }) => {
  // @TODO report to rainbowkit — for some reason,
  // in popup modal, ensImage is undefined
  // check its address using hooks
  const ensAvatar = useEnsAvatar();
  const avatar = ensImage || ensAvatar;

  return avatar ? (
    <Image
      src={avatar}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
      alt="Ens Avatar Image"
    />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "orange",
        borderRadius: 999,
        height: size,
        width: size,
      }}
    >
      🐥
    </div>
  );
};
