'use strict';

var chromedriver = require('chromedriver');
var selenium = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Chrome as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function () {
    const chromeArgs = ['start-maximized', 'disable-extensions', '--enable-automation', '--disable-dev-shm-usage'];
    if (global.browserHeadless) chromeArgs.push('--headless');
    var driver = new selenium.Builder().withCapabilities({
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
            args: chromeArgs,
            excludeSwitches: ['enable-automation']
        },
        path: chromedriver.path
    }).build();

    driver.manage().window().maximize();

    return driver;
};
