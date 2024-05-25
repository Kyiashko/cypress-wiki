import { defineConfig } from "cypress";

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "defaultCommandTimeout": 10000,
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: true,
    videoOnFailOnly: false,
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: "https://en.wikipedia.org",
    pageLoadTimeout: 10000,
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
  }
  },
});
