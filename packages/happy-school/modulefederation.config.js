const { dependencies } = require('../../package.json');

module.exports = {
  name: 'happy_school',
  remotes: {
    schedule_widget: 'schedule_widget@http://localhost:8001/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  }
}