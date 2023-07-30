const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/', 
    supportFile: 'cypress/support/commands.js',
    setupNodeEvents(on, config) {

    },
  },
});
