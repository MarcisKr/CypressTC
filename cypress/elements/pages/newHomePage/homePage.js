import footer from './footer';
import sideMenu from './sideMenu';

class homePage{
    constructor(){
        this.footer = new footer();
        this.sideMenu = new sideMenu();
    }
//===================================  ELEMENTS  ======================================

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
}

export default homePage;