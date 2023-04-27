const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  modifyObstructiveCode: true,
  e2e: {
    setupNodeEvents(on, config) {
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
