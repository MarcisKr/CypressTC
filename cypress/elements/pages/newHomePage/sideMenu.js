class sideMenu {
    constructor(){

    }
//===================================  ELEMENTS  ======================================
    buttonSignIn(){
        return cy.get('[href="/auth/sign-in"]');
    }

    buttonTCPremium(){
        return cy.get('[href="/premium"]');
    }

    buttonAboutTC(){
        return cy.get('[href="/about"]');
    }

    buttonBoard(){
        return cy.get('[href="/board-and-management"]');
    }

    buttonMedia(){
        return cy.get('[href="/media-kit"]');
    }

    buttonCareers(){
        return cy.get('[href="/careers"]');
    }

    buttonBlog(){
        return cy.get('[href="https://truecaller.blog"]');
    }

    buttonAdvertisers(){
        return cy.get('[href="https://advertisers.truecaller.com"]');
    }

    buttonBusinesses(){
        return cy.get('[href="https://business.truecaller.com"]');
    }

    buttonDevelopers(){
        return cy.get('[href="https://developer.truecaller.com"]');
    }

    buttonSupport(){
        return cy.get('[href="https://support.truecaller.com"]');
    }

    buttonNightMode(){
        return cy.get('button.w-full');
    }

    buttonSignInTOS(){
        return cy.get('[href="https://www.truecaller.com/terms-of-service"]');
    }

    buttonSignInPP(){
        return cy.get('[href="https://www.truecaller.com/privacy-policy"]');
    }

    buttonMediaFirstD(){
        return cy.get('.text-sm > div.mb-8 > .btn');
    }

    buttonMediaSecondD(){
        return cy.get('.items-center > :nth-child(1) > div.mb-8 > .btn');
    }

    buttonMediaThirdD(){
        return cy.get(':nth-child(2) > div.mb-8 > .btn');
    }

    buttonMediaFourthD(){
        return cy.get(':nth-child(3) > div.mb-8 > .btn');
    }

    buttonsMediaDownload(){
        const buttons = [this.buttonMediaFirstD(), this.buttonMediaSecondD(), this.buttonMediaThirdD(), this.buttonMediaFourthD()];
        return buttons;
    }
//===================================  METHODS  =======================================
    navigateSignIn(){
        const button = this.buttonSignIn();
        button.click();
    }

    navigatePremium(){
        const button = this.buttonTCPremium();
        button.click();
    }

    navigateAbout(){
        const button = this.buttonAboutTC();
        button.click();
    }

    navigateBoard(){
        const button = this.buttonBoard();
        button.click();
    }

    navigateMedia(){
        const button = this.buttonMedia();
        button.click();
    }

    navigateCareers(){
        const button = this.buttonCareers();
        button.click();
    }

    clickNightMode(){
        const button = this.buttonNightMode();
        button.click();
    }
//===================================  VALIDATION  =======================================
    validateBlog(){
        const button = this.buttonBlog();
        const link = "https://truecaller.blog";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    }

    validateAdvertisers(){
        const button = this.buttonAdvertisers();
        const link = "https://advertisers.truecaller.com";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    }

    validateBusinesses(){
        const button = this.buttonBusinesses();
        const link = "https://business.truecaller.com";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    }

    validateDevelopers(){
        const button = this.buttonDevelopers();
        const link = "https://developers.truecaller.com";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    }

    validateSupport(){
        cy.get('#side-nav > div.absolute.pin.overflow-y-scroll.pb-24').scrollTo('bottom');
        const button = this.buttonSupport();
        const link = "https://support.truecaller.com";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    }

    validateTheme(theme){
        if(theme === 'dark'){
            cy.get('#app').should('have.class', 'theme-dark');
        } else if(theme === 'light'){
            cy.get('#app').should('not.have.class', 'theme-dark');
        } else{
            throw err;
        }
    }

    validateSignInTOS(){
        const button = this.buttonSignInTOS();
        const link = "https://www.truecaller.com/terms-of-service";
        button.should('be.visible')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'href', link);
    }

    validateSignInPP(){
        const button = this.buttonSignInPP();
        const link = "https://www.truecaller.com/privacy-policy";
        button.should('be.visible')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'href', link);
    }

    validateMediaDownloads(){
        const buttons = this.buttonsMediaDownload();
        const link = "https://s3-eu-west-1.amazonaws.com/truecaller-marketing/truecaller-press-material.zip";
        for(let i = 0; i < buttons.length; i++){
            buttons[i].should('be.visible')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'href', link);
        }
    }
}

export default sideMenu;