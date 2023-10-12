const { $ } = require('@wdio/globals');
const BasePage = require('./base.page');

class ProductPage extends BasePage {
    get addToCartBtn() {return $('a=В корзину');}
    get productAddedToCardMessage() {return $('=Товар добавлен в корзину');}

    clickAddToCartBtn = () => this.addToCartBtn.click();
}

module.exports = new ProductPage();
