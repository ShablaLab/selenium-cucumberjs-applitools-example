'use strict';

var firefox = require('geckodriver');
var selenium = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Firefox as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function () {
    const ffArgs = [];
    if (global.browserHeadless) ffArgs.push('--headless');
    var driver = new selenium.Builder().withCapabilities({
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'webdriver.firefox.bin': firefox.path,
        'moz:firefoxOptions': {
            args: ffArgs
        }
    }).build();

    driver.manage().window().maximize();

    return driver;
};
