const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    SITE_URL: "https://magento.softwaretestingboard.com/",
    USERNAME: "new6sedov27854@inkiny.com", //"new2sedov27854@inkiny.com", //"sedov27854@inkiny.com",
    PASSWORD: "Qwerty@12345",
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
