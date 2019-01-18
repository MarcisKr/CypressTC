const page = "https://developer.truecaller.com";

beforeEach(function () {
    cy
        .visit(page)
})

describe('Developers section', () => {

    it('Open for mobile apps link', () => {
        cy
            .get('.text-grey > [href="/for-mobile-apps"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/for-mobile-apps')
    })

    it('Open for web apps link', () => {
        cy
            .get('.text-grey > [href="/for-web-apps"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/for-web-apps')
    })

    it('Open developer success link', () => {
        cy
            .get('.text-grey > [href="/success-stories"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/success-stories')
    })

    it('Open get started link', () => {
        cy
            .get('.text-grey > [href="/sign-up"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/sign-up')
    })

    it('Open FAQ link', () => {
        cy
            .get('.text-grey > [href="/faq"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/faq')
    })

    it('Open contact link', () => {
        cy
            .get('.text-grey > [href="/contact"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/contact')
    })
})