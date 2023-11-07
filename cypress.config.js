const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "experimentalStudio": true,
  // "defaultCommandTimeout": 12000,
  // "videoCompression": true,
  // "video": true,
  "experimentalWebKitSupport": true,

  "projectId": "uvkmsf",

  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "cypress/results/junit-results-[hash].xml",
    "toConsole": true
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
