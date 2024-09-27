module.exports = function (api) {
  api.cache(true);
  const plugins = [
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
        },
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};