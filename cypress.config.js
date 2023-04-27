const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  modifyObstructiveCode: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      if(config.env.environment==="qa"){
        return {
          baseUrl:'https://www.demoblaze.com',
          env: {
            env:'qa',
            apiUrl: 'https://api.demoblaze.com',
            userName: process.env.QA_USER_NAME,
            password: process.env.QA_PASSWORD
          }
        }
      } else {
        return {
          baseUrl:'https://www.localhost.com',
          env: {
            env:'local',
            apiUrl: 'https://api.localhost.com',
            userNameConfig: process.env.LOCAL_USER_NAME,
            password: process.env.LOCAL_PASSWORD
          }
        }
      }
    },
  },
});
