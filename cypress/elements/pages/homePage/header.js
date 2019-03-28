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
}

export default header;