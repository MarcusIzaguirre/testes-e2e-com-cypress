const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },    
    defaultCommandTimeout: 40000,
    requestTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
