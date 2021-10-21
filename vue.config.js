module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
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
