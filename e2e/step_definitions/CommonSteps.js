'use strict';
const expect = require('chai').expect;
const constructor = require('../support/Constructor');
const visible = require('../support/visibility');

module.exports = function () {

    this.Then(/^verify page title$/, () => {
        return browser.getTitle().then((actTitle) => {
            return expect(actTitle).to.equal(constructor.homePage.stringElems.title);
        });
    });

    this.Then(/^I scroll up$/, () => {
        return browser.executeScript('window.scrollTo(0,0)');
    });

    this.Then(/^I scroll down '(.*)' time\(s\)$/, (time) => {
        let counter = 200 * time;
        return browser.executeScript('window.scrollBy(0,' + counter + ')');
    });

    this.Then(/^'(.*)' should be visible$/, (elem) => {
        return visible.checkVisible(elem).then((result) => {
            return expect(result).to.equal(true);
        });
    });

    this.Then(/^'(.*)' should be invisible$/, (elem) => {
        return visible.checkVisible(elem).then((result) => {
            return expect(result).to.equal(false);
        });
    });
};