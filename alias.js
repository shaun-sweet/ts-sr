const path = require('path')
// This is a hack to get around how atom webpack alias resolves pull from the config
module.exports = {
      '@config': path.resolve(__dirname, 'src/config'),
      '@': path.resolve(__dirname, 'src'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@components': path.resolve(__dirname, 'src/features/common/components'),
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web'
}