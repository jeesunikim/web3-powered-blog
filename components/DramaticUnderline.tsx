import animStyles from "styles/animation.module.css";

import { useSelector } from "react-redux";

import { selectEnsAvatarColors } from "store/slices/userWalletSettingSlice";

type DramaticUnderlineProps = {
  classNames?: string;
  children: React.ReactNode;
};

export const DramaticUnderline: React.FC<DramaticUnderlineProps> = ({
  classNames,
  children,
}) => {
  const ensAvatarColors = useSelector(selectEnsAvatarColors);
  const hasEnsAvatarColors = Boolean(ensAvatarColors?.length);

  return (
    <div
      className={`${animStyles.dramaticUnderline} ${classNames}`}
      style={{
        backgroundImage: hasEnsAvatarColors
          ? `linear-gradient(120deg, ${ensAvatarColors[0]} 0%, ${ensAvatarColors[2]} 50%, ${ensAvatarColors[4]} 100%)`
          : "linear-gradient(120deg, #ffe600 0%, #FFA500 100%",
      }}
    >
      {children}
    </div>
  );
};
