const { $ } = require('@wdio/globals')
const BasePage = require('./base.page');

class SearchIframePage extends BasePage {

  get iframePopup() {
    return $('.modal-iframe')
  }
  get searchedResults() {
    return $('.result__item')
  }
  getItemByIndex = (index) => $$('.result__item')[index]

  clickOnItemByIndex =  async (index) => {
    await this.getItemByIndex(index).click()
  }

}

module.exports = new SearchIframePage();
