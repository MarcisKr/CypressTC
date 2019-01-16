describe('Language related test cases', () => {

    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Change language to...', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div.selector > div')
            .click()
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div.selector > div.selector__options > div:nth-child(3)')
            .click()
        cy
            .get('h1')
            .should('have.text', 'Cherchez un numéro de téléphone')
    })
})