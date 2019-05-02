import homePage from '../../elements/pages/homePage/homePage';

describe('Language related test cases', () => {

    it('Change language to...', () => {
        const home = new homePage();

        home.visit();
        home.closeCookieBanner();
        const language = 3;
        home.selectLanguageFooter(language);
        home.validateLanguageFooter(language);
    })
})