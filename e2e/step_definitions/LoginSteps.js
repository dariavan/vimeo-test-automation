'use strict';
const expect = require('chai').expect;
const constructor = require('../support/Constructor');
const EC = protractor.ExpectedConditions;

module.exports = function () {
    this.setDefaultTimeout(80000);

    this.Then(/^I send '([^']*)' string to '(email|password)' field to log in$/, (userData, field) => {
        return constructor.homePage.getLoginFormField(field).sendKeys(userData);
    });

    this.Then(/^I click Log in with email button/, () => {
        return constructor.homePage.logInEmailButton.click();
    });

    this.Then(/^I should be logged$/, () => {
// todo fix chai-waiters
        return browser.wait(EC.visibilityOf(constructor.homePage.downloadButton), 15000).then((result) => {
            return expect(result).to.equal(true);
        })
    });
};