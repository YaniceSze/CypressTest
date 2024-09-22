const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: "cypress/e2e/specs/";
      supportFile: "cypress/support/e2e.js";
      // test environment
      env: {
        baseUrl: "https://thinking-tester-contact-list.herokuapp.com/";
        tableUrl: "https://the-internet.herokuapp.com/tables"
      }
    },
  },
});
