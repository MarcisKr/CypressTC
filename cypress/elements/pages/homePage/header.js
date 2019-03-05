class header {
    //elements
    getButtonHome(){
        return cy.get('.router-link-active > svg');
    }
  
    getButtonGetapp(){
        return cy.get('.TopNav__Download');
    }
    //methods
}

export default header;