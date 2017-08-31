'use strict';

const expect = require('chai').expect;
const constructor = require('../support/Constructor');
const visible = require('../support/visibility');
const EC = protractor.ExpectedConditions;

module.exports = function () {
    this.setDefaultTimeout(15000);

    this.Given(/^I am at Home page$/, () => {
        return constructor.homePage.openPage().then(() => {
            return browser.wait(EC.visibilityOf(constructor.homePage.downloadButton), 20000);
        })
    });

    this.When(/^I click '(login|join|download)' button$/, function (button) {
        return constructor.homePage.getButton(button).click()
            .then(() => {
                switch (button) {
                    case 'login':
                        return browser.wait(EC.visibilityOf(constructor.homePage.loginForm), 15000);
                    case 'join' :
                        return browser.wait(EC.visibilityOf(constructor.homePage.joinForm), 15000);
                    case 'download':
                        return browser.wait(EC.visibilityOf(element(by.css('.localnav'))), 15000);
                    default:
                        throw new Error('bug in getFormField(fieldName)');
                }
            }).then((result) => {
                return expect(result).to.equal(true);
            })
    });
};