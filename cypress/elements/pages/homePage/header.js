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

    getButtonAvatar(){
        return cy.get('.TopNav__UserAvatar');
    }

    getButtonSignout(){
        return cy.get('.TopNav__UserMenuSignOut');
    }
    //methods
    navigateToMainPage(){
        const link = this.getButtonHome();
        link.click({force: true});
        cy.url().should('eq', "https://www.truecaller.com/");
    }
}

export default header;