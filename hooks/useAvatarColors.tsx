import { useState, useEffect } from "react";
import { getAvatarColors } from "helpers/getAvatarColors";

import { useEnsAvatar } from "hooks/useEnsAvatar";

export const useAvatarColors = () => {
  const [avatarColors, setAvatarColors] = useState<Array<any> | undefined>(
    undefined,
  );
  const ensAvatar = useEnsAvatar();

  async function fetchAvatarColors({ ensAvatar }: { ensAvatar: string }) {
    const response = await getAvatarColors({
      avatar: ensAvatar,
    });

    if (response) setAvatarColors(response as Array<string>);
  }

  useEffect(() => {
    if (ensAvatar) {
      fetchAvatarColors({ ensAvatar });
    } else {
      fetchAvatarColors({ ensAvatar: "" });
    }
  }, [ensAvatar]);

  return avatarColors?.map((color) => color.hex());
};
