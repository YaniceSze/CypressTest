const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: "cypress/e2e/specs/";
      supportFile: "cypress/support/e2e.js"
    },
  },
});
