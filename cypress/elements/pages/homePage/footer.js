class footer {
    //elements
    getPickerLanguage(){
        return cy.get('#app > div.footer > div > div.footer-top > div.footer-social > div.selector > div');
    }

    getButtonGetApp(){
        return cy.get(':nth-child(1) > [href="/truecaller"]');
    }

    getButtonSupport(){
        return cy.get(':nth-child(1) > [href="https://support.truecaller.com"]');
    }

    getButtonAbout(){
        return cy.get('.footer-top > :nth-child(2) > [href="/about"]');
    }

    getButtonPress(){
        return cy.get('.footer-top > :nth-child(2) > [href="/press"]');
    }

    getButtonCareers(){
        return cy.get('.footer-top > :nth-child(2) > [href="/careers"]');
    }

    getButtonContact(){
        return cy.get('.footer-top > :nth-child(2) > [href="/contact"]');
    }

    getButtonImpact(){
        return cy.get('.footer-top > :nth-child(2) > [href="/impact"]');
    }
    //methods
    selectLanguage(number){
        const picker = this.getPickerLanguage();
        picker.click();
        const selection = cy.get('#app > div.footer > div > div.footer-top > div.footer-social > div.selector > div.selector__options > div:nth-child(' + number + ')');
        selection.click();
    }
    
    openGetApp(){
        const button = this.getButtonGetApp();
        button.click();
    }

    openAbout(){
        const button = this.getButtonAbout();
        button.click();
    }

    openPress(){
        const button = this.getButtonPress();
        button.click();
    }

    openCareers(){
        const button = this.getButtonCareers();
        button.click();
    }

    openContact(){
        const button = this.getButtonContact();
        button.click();
    }
    
    openImpact(){
        const button = this.getButtonImpact();
        button.click();
    }
    //validation
    validateLinkSupport(){
        const button = this.getButtonSupport();
        button.should('be.visible')
        .and('have.attr', 'href', 'https://support.truecaller.com')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    }
}

export default footer;