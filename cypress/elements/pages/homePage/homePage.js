import header from './header';
//import footer

class homePage{
    constructor(){
        this.header = new header();
    }
    //elements
    getButtonDownloadNow(){
        return cy.get('.home-download-button');
    }

    getButtonKnowMore(){
        return cy.get('.btn--black');
    }
    //methods
    visit(){
        cy.visit("https://www.truecaller.com/");
    }

    navigateToMainPage(){
        const link = this.header.getButtonHome();
        link.click({force: true});
        cy.url().should('eq', "https://www.truecaller.com/");
    }

    validateButtonDownload(){
        const linkVisited = 'https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dtcweb&rdid=com.truecaller';
        const button = this.getButtonDownloadNow();
        button.should('be.visible')
        .and('have.attr', 'href', linkVisited)
        .and('have.attr', 'target', '_blank');
        button.contains('Download now');
    }

    validateButtonKnowmore(){
        const linkVisited = 'https://www.youtube.com/watch?v=r12OvTFymmc';
        const button = this.getButtonKnowMore();
        button.should('be.visible')
        .and('have.attr', 'href', linkVisited)
        .and('have.attr', 'target', '_blank');
        button.contains('Know more');
    }
}  

export default homePage;