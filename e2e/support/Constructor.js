const HomePage = require('../pageObjects/HomePage.js');
const JoinForm = require('../pageObjects/JoinForm.js');
const LoginForm = require('../pageObjects/LoginForm.js');
const ITunes = require('../pageObjects/ItunesPage');

class Constructor {
    constructor() {
        this.homePage = new HomePage();
        // this.joinForm = new JoinForm();
        // this.loginForm = new LoginForm();
        this.itunesPage = new ITunes();
    }
}

module.exports = new Constructor();