const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      timestamp: 'mmddyyyy_HHMMss',
      reportFilename: 'cypress-report',
      pageTitle: 'Cypress Test Report',
      reportPageTitle: 'Cypress Test Report',
  },
  e2e: {
    testIsolation: false,
    defaultCommandTimeout: 25000,
    viewportWidth: 1440,
    viewportHeight: 800,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    },
  });
