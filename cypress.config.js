const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 40000,
    requestTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
