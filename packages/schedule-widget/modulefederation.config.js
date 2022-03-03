const { dependencies } = require('../../package.json');

module.exports = {
  name: 'schedule_widget',
  exposes: {
    './ScheduleWidget': './src/ScheduleWidget',
  },
  filename: 'remoteEntry.js',
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