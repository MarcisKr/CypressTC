import homePage from '../../elements/pages/homePage/homePage';

describe('Body section', () => {
    it('Download now button opens correct page', () => {
        const home = new homePage();
        const linkVisited = 'https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dtcweb&rdid=com.truecaller';
        home.visit();
        const button = home.getButtonDownloadNow();
        button.should('be.visible')
        .and('have.attr', 'href', linkVisited)
        .and('have.attr', 'target', '_blank');
        button.contains('Download now');
    })

    it('Know more button opens correct page', () => {
        const home = new homePage();
        const linkVisited = 'https://www.youtube.com/watch?v=r12OvTFymmc';
        home.visit();
        const button = home.getButtonKnowMore();
        button.should('be.visible')
        .and('have.attr', 'href', linkVisited)
        .and('have.attr', 'target', '_blank');
        button.contains('Know more');
    })
});