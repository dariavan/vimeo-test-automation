'use strict';
const expect = require('chai').expect;
const constructor = require('../support/Constructor');
const EC = protractor.ExpectedConditions;

module.exports = function () {
    this.setDefaultTimeout(12000);
    this.Then(/^I wait for Itunes page to load$/, () => {
        return browser.wait(EC.visibilityOf(constructor.itunesPage.contentPage), 8000);
    });

    this.Then(/^verify actual '(last update|version|size)' equals expected '(.*)'$/, (field, expResult) => {
        return constructor.itunesPage.getActualDownloadParameter(field).getText()
            .then((actResult) => {
                return expect(actResult).to.equal(expResult);
            });
    });
};