/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  overrides: [
    {
      files: "**/*.spec.ts",
      options: {
        printWidth: 2000,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
