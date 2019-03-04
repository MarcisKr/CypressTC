class header {
    //elements
    getButtonHome(){
        return cy.get('.router-link-active > svg');
    }
    //methods
    navigateToMainPage(){
        this.getButtonHome.click({force: true});
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/');
    }
}

export default header;