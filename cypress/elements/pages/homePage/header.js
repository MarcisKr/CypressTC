class header {
    //elements
    getButtonHome(){
        return cy.get('.router-link-active > svg');
    }

    getButtonGetapp(){
        return cy.get('.TopNav__Download');
    }

    getButtonSignin(){
        return cy.get('.TopNav__Link');
    }
    //methods
}

export default header;