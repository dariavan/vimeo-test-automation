'use strict';
exports.config = {
    directConnect: true,
    baseUrl: 'https://vimeo.com/cameo',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'e2e/features/*.feature'
    ],
    onPrepare: function () {
        const globals = require('protractor');
        // browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.waitForAngular();

        // const chai = require('chai');
        // global.should = chai.should();
        // chai.use(require('chai-as-promised'));
    },
    cucumberOpts: {
        require: ['e2e/step_definitions/*.js', 'e2e/support/Constructor.js'],
        // tags: ['@validate', '@login', '@create']
    }
};