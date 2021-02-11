module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        extensions: [
          ".ios.js",
          ".android.js",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@navigation": "./src/navigation",
          "@store": "./src/store",
          "@i18n": "./src/i18n",
          "@services": "./src/services",
          "@interceptor": "./src/services/interceptor",
          "@utility": "./src/utility",
        },
      },
    ],
  ],
};
