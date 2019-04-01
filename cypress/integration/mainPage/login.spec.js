import homePage from '../../elements/pages/homePage/homePage';

describe('Login test cases', () => {

    it('check and uncheck enhanced search', () => {
        const home = new homePage();
        let country = 'Afghanistan';
        let checked = true;

        home.visit();
        home.openSigninPopup();
        home.selectLoginCountry(country);
        home.validateCheckEnhanced(checked);
        home.checkEnhancedSearch();
        checked = false;
        home.validateCheckEnhanced(checked);
        country = 'Latvia';
        home.selectLoginCountry(country);
    })

    it('info button show and hide more info about enhanced search', () => {
        const home = new homePage();
        let country = 'Afghanistan';
        
        home.visit();
        home.openSigninPopup();
        home.selectLoginCountry(country);
        home.openEnhancedInfo();
        home.validateTextEnhancedInfo();
        country = 'Latvia';
        home.selectLoginCountry(country);
    })

    it('login and logout with google(mocked) account', () => {
        const home = new homePage();

        home.closeCookieBanner();
        home.setUserGoogle();
        home.reload();
        home.validateButtonUserAvatar();
        home.openUserMenu();
        home.clickSignout();
        home.validateButtonSignin();
    })

    it('log in after searching for a number(captcha blocked)', () => {
        const home = new homePage();
        const country = 'se';
        const number = '735358210';
        const address = 'https://www.truecaller.com/search/' + country + '/' + number;

        home.selectSearchCountry(country);
        home.enterNumberInSearchbar(number);
        home.submitSearchNumber();
        home.validateURL(address);
        home.setUserGoogle();
        home.reload();
        home.validateButtonUserAvatar();
        home.validateCaptcha();
    })
    
})