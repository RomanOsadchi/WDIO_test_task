const { browser } = require('@wdio/globals');

module.exports = class BasePage {
    get currentUrl() {
        return browser.getUrl();
    }
};
