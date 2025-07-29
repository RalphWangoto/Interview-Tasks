const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: require.resolve('mochawesome'), // Explicit path
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    timestamp: 'mmddyyyy_HHMMss'
  },
  e2e: {
    testIsolation: false,
    defaultCommandTimeout: 25000,
    viewportWidth: 1440,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    }
  }
});