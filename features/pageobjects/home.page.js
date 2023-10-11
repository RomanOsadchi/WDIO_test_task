const { $ } = require('@wdio/globals')
const BasePage = require('./base.page');

class HomePage extends BasePage {

  get enterButton() {
    return $('.auth-bar .auth-bar__item--text')
  }
  get searchInput() {
    return $('.fast-search__input')
  }
  open = () => browser.url('')
  clickEnterButton = async () => await this.enterButton.click()
  typeInSearchInput = async (text) => await this.searchInput.setValue(text)
}

module.exports = new HomePage();
