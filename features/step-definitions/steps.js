const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page');
const homePage = require('../pageobjects/home.page')
const searchIframe = require('../pageobjects/searchIframe.page')
const productPage = require('../pageobjects/product.page')
const cartPage = require('../pageobjects/cart.page')
const cartApi = require('../api_helpers/cart_api')
const cookies = require('../../www.onliner.by_cookies.json')

const pages = {
    login: loginPage,
    home: homePage,
    cart: cartPage
}

Given('I authorized user', async () => {
    await pages.home.open()
    const filteredCookies = cookies.map(cookie => {
        delete cookie.sameSite
        return cookie
    })
    await browser.setCookies(filteredCookies)
    await browser.refresh()
})

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When('I click on login button', async () => {
    await homePage.clickLoginButton()
})

When('I login with saved credentials', async () => {
    await browser.pause()
    await loginPage.login()
});

When('I click on recovery link', async () => {
    await loginPage.clickRecoveryLink()
})

Then('I should be redirected {string} url', async (url) => {
    const curUrl = await browser.getUrl()
    expect(curUrl).toMatch(url)
})

Then('I should see recaptcha verification box', async () => {
    await expect(loginPage.recaptcha).toBeDisplayedInViewport()
});

When(/I type (.+) in input/, async (searchString) => {
    await homePage.typeInSearchInput(searchString)
})

Then('I can see search popup with searched results', async () => {
    const iframe = await searchIframe.iframePopup
    const results = await searchIframe.searchedResults
    await expect(iframe).toBeDisplayedInViewport()
    await browser.switchToFrame(iframe)
    await expect(results).toBeDisplayedInViewport()
})

When('I click on {int} suggested item', async (number) => {
    await searchIframe.clickOnItemByIndex(number-1)
    await browser.switchToParentFrame()
})

Then('I should be redirected to product page', async () => {
    await expect(await browser.getUrl()).toMatch(/^https:\/\/catalog\.onliner\.by(\/.+)+\/.+$/)
})

When('I click on put in cart button', async () =>{
    await productPage.clickAddToCartBtn()
    expect(await productPage.productAddedToCardMessage).toBeDisabled()
})

Then(/I can see that (.+) in the cart/, async (product) => {
    await expect(cartPage.getItemByTitle(product)).toBeDisplayed()
})

When(/I add (.+) to the cart using API/, async (productId) => {
    await cartApi.addToCart(productId)
})

When(/I delete (.+) from the cart using API/, async (productId) => {
    await cartApi.deleteFromCart(productId)
})

Then('I can see that cart is empty', async () => {
    await expect(cartPage.cartMessage).toHaveText('Ваша корзина пуста')
})
