import homePage from '../../elements/pages/homePage/homePage';

describe('Login test cases', () => {

    beforeEach(function () {
        cy
            .visit('/')
    })

    it('check and uncheck enhanced search', () => {
        const home = new homePage();

        home.visit();
        home.openSigninPopup();
        home.changeLoginCountry('Afghanistan');
        home.validateCheckEnhanced(true);
        home.checkEnhancedSearch();
        home.validateCheckEnhanced(false);
        home.changeLoginCountry('Latvia');
    })

    it('info button show and hide more info about enhanced search', () => {
        const home = new homePage();
        
        home.visit();
        home.openSigninPopup();
        home.changeLoginCountry('Afghanistan');
        home.openEnhancedInfo();
        home.validateTextEnhancedInfo();
        home.changeLoginCountry('Latvia');
    })

    it('login and logout with google(mocked) account', () => {
        /*cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .window()
            .then(win => {//cypresstruecaller@gmail.com
                localStorage.truecallerStore = '{"user":{"redirect":"/","accessToken":"a1w1J------wudVhMGZD9T-f_e5xmeLwW8RgtTZY2Z5CNb6udBSb8wjaF4m8c836","enhancedSearch":true,"email":"cypresstruecaller@gmail.com","name":"Cypress Automation","image":"https://lh5.googleusercontent.com/-3H-92sybLgA/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-ii93ed_hnvQDAnroGmOQo0gJFjog/mo/photo.jpg?sz=50","country":"lv","ipCountry":"lv","ipCountryDetected":true,"searchCountry":"lv","unlistCountry":"lv","searchQuery":"","searchHistory":[],"device":{"isMobile":false,"isIOS":false,"isAndroidOS":false}},"showCookieBanner":true}'
            })*/
        const home = new homePage();

        //home.closeCookieBanner();
        home.setUserGoogle();
        home.reload();
        /*cy
            .get('.TopNav__UserAvatar')
            .should('be.visible')
            .click({force: true})
            .log("**User has been logged IN.**")*/
        home.validateButtonUserAvatar();
        home.openUserMenu();
        home.clickSignout();
        home.validateButtonSignin();
    })

    it('log in after searching for a number(captcha blocked)', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('select')
            .select('se')
        cy
            .get('.searchbar__query')
            .type('735358210', { delay: 100 })
        cy
            .get('.searchbar__submit')
            .click()
        cy
            .get('.sign-in-dialog-cancel')
            .click()
        cy
            .get('.ProfileHeader > h3')
            .should('have.text', 'You need to sign in to view this result')
        cy
            .get('.ProfileHeader > .ProfileSignIn')
            .should('be.visible')
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/search/se/735358210')
        cy
            .get('.ProfileHeader > .ProfileSignIn')
            .should('be.visible')
        cy
            .window()
            .then(win => {
                localStorage.truecallerStore = '{"user":{"redirect":"/","accessToken":"a1w1J------wudVhMGZD9T-f_e5xmeLwW8RgtTZY2Z5CNb6udBSb8wjaF4m8c836","enhancedSearch":true,"email":"cypresstruecaller@gmail.com","name":"Cypress Automation","image":"https://lh5.googleusercontent.com/-3H-92sybLgA/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-ii93ed_hnvQDAnroGmOQo0gJFjog/mo/photo.jpg?sz=50","country":"lv","ipCountry":"lv","ipCountryDetected":true,"searchCountry":"lv","unlistCountry":"lv","searchQuery":"","searchHistory":[],"device":{"isMobile":false,"isIOS":false,"isAndroidOS":false}},"showCookieBanner":true}'
            })
        cy
            .reload()
        cy
            .get('.TopNav__UserAvatar')
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(1)', {timeout: 10000, frequency: 100})
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(2)')
            .should('be.visible')
    })
    
})