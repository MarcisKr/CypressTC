import header from './header';
//import footer

class aboutPage{
    constructor(){
        this.header = new header();
    }
    //elements
    //methods
    visit(){
        cy.visit("https://www.truecaller.com/about");
    }
}  

export default aboutPage; 