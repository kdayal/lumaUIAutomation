const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    SITE_URL: "https://magento.softwaretestingboard.com/",
    USERNAME: "",
    PASSWORD: "",
  },
  //video: true,
  //videoCompression: 32,
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
