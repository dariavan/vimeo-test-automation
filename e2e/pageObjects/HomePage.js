'use strict';

class Home {
    constructor() {
        this.url = 'https://vimeo.com/cameo';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.pageHeader = element(by.css('#page_header'));
        this.joinButton = element(by.partialLinkText('Join'));
        this.loginButton = element(by.partialLinkText('Log in'));
        this.downloadButton = element(by.css('.button.download'));

        this.joinForm = $('form#join_form');
        this.userNameJoinForm = this.joinForm.$('#signup_name');
        this.emailJoinForm = this.joinForm.$('#signup_email');
        this.passwordJoinForm = this.joinForm.$('#login_password');
        this.joinEmailButton = $('input[value="Join with email"]');


        this.loginForm = $('form#login_form');
        this.emailLoginForm = this.loginForm.$('#signup_email');
        this.passwordLoginForm = this.loginForm.$('#login_password');
        this.logInEmailButton = $('input[value="Log in with email"]');
        this.profileImg = $('#topnav_menu_avatar');

        this.desktop = element(by.css('#topnav_desktop'));
        this.phonePicture = element(by.css('.phone_picture.animated'));

        this.data = {
            'login': 'mailfortest54@gmail.com',
            'password': 'test123test',
            'user name': 'Test User'
        };

        this.elements = {
            'desktop': '#intro',
            'phonePicture': '.phone_picture.animated',
            'sliding': '.sliding_pictures',
            'video_ctrl': '.video_controls',
            'features': '.features_wrapper',
            'video': '.background_video',
            'soundtracks': '#soundtracks>div.content_wrapper',
            'videolist': '.video_item',
            'creators': '#creators>div>div'
        };
    }

    getButton(btnName) {
        switch (btnName.toLowerCase()) {
            case 'join':
                return element(by.partialLinkText('Join'));
            case 'download':
                return element(by.css('.button.download'));
            case 'login':
                return element(by.partialLinkText('Log in'));
            default:
                return new Error('bug in getButton(btnName)');
        }
    }

    getLoginFormField(fieldName) {
        switch (fieldName.toLowerCase()) {
            case 'password':
                return this.loginForm.$('#login_password');
            case 'email':
                return this.loginForm.$('#signup_email');
            default:
                throw new Error('bug in getFormField(fieldName)');
        }
    }

    getJoinFormField(fieldName) {
        switch (fieldName.toLowerCase()) {
            case 'password':
                return this.joinForm.$('#signup_password');
            case 'email':
                return this.joinForm.$('#signup_email');
            case 'user name':
                return this.joinForm.$('#signup_name');
            default:
                throw new Error('bug in getJoinFormField(fieldName)');
        }
    }

    accountParameters(string) {
        switch (string.toLowerCase()) {
            case 'password':
                return 'test123test';
            case 'email':
                return 'testtesttesttest@gmail.com';
            case 'user name':
                return 'Test User';
            default:
                throw new Error('bug in getButton(btnName)');
        }
    }
}

module.exports = Home;