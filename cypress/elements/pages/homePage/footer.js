class footer {
    //elements
    getPickerLanguage(){
        return cy.get('#app > div.footer > div > div.footer-top > div.footer-social > div.selector > div');
    }
    //methods
    selectLanguage(number){
        const picker = this.getPickerLanguage();
        picker.click();
        const selection = cy.get('#app > div.footer > div > div.footer-top > div.footer-social > div.selector > div.selector__options > div:nth-child(' + number + ')');
        selection.click();
    }
    //validation
}

export default footer;