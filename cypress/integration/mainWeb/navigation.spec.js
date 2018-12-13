describe('Navigation test cases', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Clicking truecaller logo brings me home', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .visit('/about')
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/about')
        cy
            .get('.router-link-active > svg')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/')
    })

    it('Navigate to Downloads page', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('.TopNav__Download')
            .click()
        cy
            .get('.dl-dialog-cancel')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/download')
    })
})