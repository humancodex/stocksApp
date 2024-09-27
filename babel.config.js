module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './tamagui.config.ts',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@views': './src/views',
          '@layouts': './src/layouts',
          '@hooks': './src/hooks',
          '@navigator': './src/navigator',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@modules': './src/modules',
          '@api': './src/api',
        },
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};