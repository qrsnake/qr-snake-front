module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'QR snake',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  
  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/qr-snake-front/'
    : '/'
}
