const { $ } = require('@wdio/globals');

const BasePage = require('./base.page');

class CartPage extends BasePage {
    get cartMessage() {
        return $('.cart-message__title');
    }
    open = () => browser.url('https://cart.onliner.by/');
    getItemByTitle = (title) => $(`a=${title}`);
}

module.exports = new CartPage();
