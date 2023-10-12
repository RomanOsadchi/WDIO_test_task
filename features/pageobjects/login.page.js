const { $ } = require('@wdio/globals')
const Page = require('./base.page');

class LoginPage extends Page {

    get inputUsername () {
        return $('[role="dialog"] input[type="text"]');
    }
    get inputPassword () {
        return $('[role="dialog"] input[type="password"]');
    }
    get btnSubmit () {
        return $('[role="dialog"] button[type="submit"]');
    }
    get recaptcha() {
        return $('.auth-form__captcha')
    }
    get recoveryLink(){
        return $('a[href$="recover-password"]')
    }
    login = async (username=process.env.EMAIL, password=process.env.PASSWORD) => {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open = () => browser.url('/login');
    clickRecoveryLink = () => this.recoveryLink.click()
}

module.exports = new LoginPage();
