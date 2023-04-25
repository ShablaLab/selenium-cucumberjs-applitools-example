/* eslint-disable require-jsdoc */
module.exports = async function () {

    this.Given(/^I am on the login home page$/, async function () {
        await navigate();
    });

    this.When(/^I login with username as "([^"]*)" and password as "([^"]*)"$/, async function (user, pass) {
        await login(user, pass);
    });

    this.Then(/^I should be able to login successfully$/, async function () {
        await waitForLogin();
    });

    this.Then(/^Verify the screen for the visual test "([^"]*)"$/, function (screenName) {
        if (global.isVisual) {
            eyes.checkWindow(screenName);
        }
    });

    this.Given(/^I login successfully with username as "([^"]*)" and password as "([^"]*)"$/, async function (user, pass) {
        await navigate();
        await login(user, pass);
        await waitForLogin();
    });

    async function navigate() {
        await helpers.loadPage(global.baseUrl);
    }

    async function login(user, pass) {
        await helpers.waitForElementLocated(by.id('user-name'));
        await driver.findElement(by.id('user-name')).sendKeys(user);
        await driver.findElement(by.id('password')).sendKeys(pass);
        await driver.findElement(by.id('login-button')).click();
    }

    async function waitForLogin() {
        await helpers.waitForElementLocated(by.id('shopping_cart_container'));
    }
};
