module.exports = {
  ...require("@stellar/prettier-config"),
  overrides: [
    {
      files: "*.mdx",
      options: {
        proseWrap: "never",
      },
    },
  ],
};
