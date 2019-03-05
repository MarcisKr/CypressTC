import homePage from '../../elements/pages/homePage/homePage';

describe('Body section', () => {
    it('Download now button opens correct page', () => {
        const home = new homePage();
        home.visit();
        home.validateButtonDownload();
    })

    it('Know more button opens correct page', () => {
        const home = new homePage();
        home.visit();
        home.validateButtonKnowmore();
    })
})