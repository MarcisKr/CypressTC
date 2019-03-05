import header from './header';
//import footer

class downloadPage{
    constructor(){
        this.header = new header();
    }
    //elements
    //methods
    visit(){
        cy.visit("https://www.truecaller.com/download");
    }

    visitPopupOff(){
        cy.visit("https://www.truecaller.com/download");
        cy.get('.dl-dialog-cancel').click();
    }
}

export default downloadPage; 