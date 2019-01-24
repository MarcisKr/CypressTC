const page = "https://advertisers.truecaller.com"

beforeEach(() => {
    cy
        .visit(page)
})

describe('Header links', () => {
    it('Open Home link', () => {
        cy
            .visit(page + '/case-studies')
        cy
            .get('.nav__logo')
            .click({force: true})
    })

    it('Open Case studies link', () => {
        cy
            .get('.nav__con > [href="/case-studies"]')
            .click({force: true})
        cy
            .url()
            .should('eq', page + '/case-studies')
    })

    it('Open Ads manager link', () => {
        cy
            .get('.nav__con > [href="https://adsmanager.truecaller.com"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://adsmanager.truecaller.com/')
    })

    it('Open Audiences link', () => {
        cy
            .get('.nav__con > [href="/campaigns"]')
            .click({force: true})
        cy
            .url()
            .should('eq', page + '/login')
    })

    it('Open Contact link', () => {
        cy
            .get('.nav__con > [href="/contact"]')
            .click({force: true})
        cy
            .url()
            .should('eq', page + '/contact')
    })
})