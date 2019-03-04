import header from './header';
//import footer

class homePage{
    constructor(){

    }

    visit(){
        cy.visit("https://www.truecaller.com/");
    }

    getButtonDownloadNow(){
        return cy.get('.home-download-button');
    }

    getButtonKnowMore(){
        return cy.get('.btn--black');
    }
}  

export default homePage;