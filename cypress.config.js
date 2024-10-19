require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    username: process.env.NAME,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
});
