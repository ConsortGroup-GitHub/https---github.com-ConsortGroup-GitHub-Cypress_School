const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

// Lin to see all available configurations:
// https://docs.cypress.io/guides/references/configuration

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "reporter":"mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": true,
      "json": true,
      "reportDir": "cypress/report"
    },
    defaultCommandTimeout: 3000, // global level timeout
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
