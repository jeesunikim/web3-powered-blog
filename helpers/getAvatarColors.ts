import chroma from "chroma-js";
import getPixels from "get-pixels";
import getRgbaPalette from "get-rgba-palette";

// https://github.com/colorjs/get-image-colors/blob/master/index.js
export const getAvatarColors = ({ avatar }: { avatar: string | undefined }) => {
  if (avatar) {
    return new Promise(function (resolve, reject) {
      getPixels(avatar, (err: Error, pixels: any) => {
        if (err) {
          reject("Bad image path");
          return;
        }
        const palette = getRgbaPalette(pixels.data, 5).map((rgba: string) =>
          chroma(rgba),
        );
        resolve(palette);
      });
    });
  }

  return undefined;
};
