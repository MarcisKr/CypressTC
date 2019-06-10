import footer from './footer';
import sideMenu from './sideMenu';

class homePage{
    constructor(){
        this.footer = new footer();
        this.sideMenu = new sideMenu();
    }
//===================================  ELEMENTS  ======================================
    buttonDownload(){
        return cy.get(':nth-child(3) > .btn');
    }

    buttonAllFeatures(){
        return cy.get('.text-white > .btn');
    }

    buttonFeaturesDownload(){
        return cy.get('.btn');
    }
//===================================  METHODS  =======================================
    visitURL(url = "https://www.truecaller.com"){
        cy.visit(url);
    }

    clickElement(element){
        element.click({force: true});
    }
//===================================  VALIDATION  ====================================
    validateURL(url){
        cy.url().should('eq', url);  
    }

    validateDownloadPopup(){
        cy.get('.z-100 > .container').should('be.visible');
        cy.get('[href="https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dtcweb&rdid=com.truecaller"] > picture > img').should('be.visible');
        cy.get('[href="https://itunes.apple.com/app/apple-store/id448142450?pt=303680&ct=Website1&mt=8"] > picture > img').should('be.visible');
        cy.get('[href="https://apk.truecaller.com/truecaller.apk"] > picture > img').should('be.visible');
    }
}

export default homePage;