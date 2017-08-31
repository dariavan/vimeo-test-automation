'use strict';
const expect = require('chai').expect;
const constructor = require('../support/Constructor');
const EC = protractor.ExpectedConditions;

module.exports = function () {
    this.setDefaultTimeout(40000);
    this.Then(/^Join form should be visible$/, () => {
        return browser.wait(EC.visibilityOf(constructor.homePage.joinForm), 15000);
    });

    this.Then(/^I send an unique '(.*)' email/, (email) => {
        let randNum = Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000;
        return constructor.homePage.emailJoinForm.sendKeys(randNum + email);
    });

    this.Then(/^I send '(.*)' string to '(user name|email|password)' field to create new user$/, (data, field) => {
        return constructor.homePage.getJoinFormField(field).sendKeys(data);
    });

    this.Then(/^I click Join with email button/, () => {
        return constructor.homePage.joinEmailButton.click()
    });

    this.Then(/^I should be redirected$/, () => {
        return browser.wait(EC.visibilityOf(element(by.css('.guarantee.en'))), 15000)
            .then((result) => {
                return expect(result).to.equal(true);
            });
    });
};