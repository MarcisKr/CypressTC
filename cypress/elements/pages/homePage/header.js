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

    navigateToDownloadPage(){
        const button = this.getButtonGetapp();
        button.click({force: true});
        cy.url().should('eq', "https://www.truecaller.com/download");
    }

    openSigninPopup(){
        const button = this.getButtonSignin();
        button.click({force: true});
    }

    openUserMenu(){
        const button = this.getButtonAvatar();
        button.click({force: true});
    }

    clickSignout(){
        const button = this.getButtonSignout();
        button.click({force: true});
    }
    //validation
    validateButtonUserAvatar(){
        const button = this.getButtonAvatar();
        button.should('be.visible').log("**User has been logged IN.**");
    }

    validateButtonSignin(){
        const button = this.getButtonSignin();
        button.should('be.visible').log("**User has been logged OUT.");
    }
}

export default header;