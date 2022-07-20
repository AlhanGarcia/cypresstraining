const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6wq4rr',
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    defaultCommandTimeout: 8000,
    env: 
    {
      url: 'https://rahulshettyacademy.com'
    }
  },
});
