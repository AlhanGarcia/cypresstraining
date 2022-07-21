const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '6wq4rr',
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/',
    defaultCommandTimeout: 8000,
    env: 
    {
      url: 'https://rahulshettyacademy.com'
    },
    retries: {
      "runMode": 1
    }
  },
});
