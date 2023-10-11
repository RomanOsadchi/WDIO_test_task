const { $ } = require('@wdio/globals')
const BasePage = require('./base.page');

class ProductPage extends BasePage {

  get addToCartBtn(){return $('a=В корзину')}

  clickAddToCartBtn = () => this.addToCartBtn.click()
}

module.exports = new ProductPage();
