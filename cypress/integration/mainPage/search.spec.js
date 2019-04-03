import homePage from '../../elements/pages/homePage/homePage';

describe('Search test cases', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Number can be removed with "x" from search', () => {
        const home = new homePage();

        home.visit();
        home.closeCookieBanner();
        const country = 'se';
        home.selectSearchCountry(country);
        const number = '735358210';
        home.enterNumberInSearchbar(number);
        home.clearSearchField();
        home.validateFieldSearchEmpty();
    })

    it('Can not commit search if letters are entered', () => {
        const home = new homePage();

        home.visit();
        home.closeCookieBanner();
        const country = 'se';
        home.selectSearchCountry(country);
        const symbols = 'qwerty';
        home.enterNumberInSearchbar(symbols);
        home.validateButtonSubmitDisabled();
    })

    it('Search number while logged out', () => {
        const home = new homePage();

        home.visit();
        home.closeCookieBanner();
        const country = 'se';
        home.selectSearchCountry(country);
        const number = '735358210';
        home.enterNumberInSearchbar(number);
        home.submitSearchNumber();
        home.validateLogedOutSearch();
        const url = 'https://www.truecaller.com/search/se/735358210';
        home.validateURL(url);
    })

    /*it('Search number while logged in(captcha blocked)', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('.TopNav__Link')
            .click()
        cy
            .window()
            .then(win => {
                localStorage.tcstorage = '{"user":{"redirect":null,"enhancedSearch":true,"enhancedSearchTime":1521117641579,"accessToken":"gVB81DQTVTzXZG6dQ9ck1FjYt3yCMK3e"},"search":{"history":[],"country":{"CID":"India-Other","CN":"India","CCN":"in","CC":"91"}},"showCookieBanner":false}'
            })
        cy
            .get('.sign-in-dialog-content > :nth-child(2)')
            .click()
            .should('not.exist')
            .log("User has logged in")
        cy
            .get('.searchbar__query')
            .type('735358210', { delay: 100 })
        cy
            .get('.searchbar__submit')
            .click()
        cy
            .get('.ProfileRecaptcha > :nth-child(1)')
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(2)')
            .should('be.visible')
    })*/

    // it('All actions with found contact', () => {
    //     cy
    //         .get('select')
    //         .select('se')
    //     cy
    //         .get('.searchbar__query')
    //         .type('735358210', { delay: 100 })
    //     cy
    //         .get('.searchbar__submit')
    //         .click()
    //     cy
    //         .get('.ProfileActions')
    //         .should('be.visible')
    //     cy
    //         .get('.ProfileName > div')
    //         .should('be.visible')
    //     // cy
    //     //     .get('[href="tel://+46735358210"]')
    //     //     .click()
    //     // window open logic needed
    // })
})