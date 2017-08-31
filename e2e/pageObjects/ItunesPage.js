'use strict';

class Itunes {
    constructor() {
        this.contentPage = element(by.id('content'));
        this.lastUpdate = element(by.css('.release-date>span:nth-child(2)'));
        this.version = element(by.css('.list>li:nth-child(4)>span:nth-child(2)'));
        this.size = element(by.css('.list>li:nth-child(5)'));
    }

    getActualDownloadParameter(parameter) {
        switch (parameter.toLowerCase()) {
        case 'last update':
            return element(by.css('.release-date>span:nth-child(2)'));
        case 'version':
            return element(by.css('.list>li:nth-child(4)>span:nth-child(2)'));
        case 'size':
            return element(by.css('.list>li:nth-child(5)'));
        default:
            return new Error('bug in getActualDownloadParameter(parameter)');
        }
    }
}

module.exports = Itunes;