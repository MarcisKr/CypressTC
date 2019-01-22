const page = "https://advertisers.truecaller.com"

beforeEach(() => {
    cy
        .visit(page)
})

describe('Footer contractual links', () => {
    it('Terms of service link', () => {
        cy
            .get('[href="https://www.truecaller.com/terms-of-service"]')
            .should('be.visible')
            .and('have.text', 'Terms of service')
            .and('have.attr', 'onclick')
    })

    it('Privacy policy link', () => {
        cy
            .get('[href="https://www.truecaller.com/privacy-policy"]')
            .should('be.visible')
            .and('have.text', 'Privacy policy')
            .and('have.attr', 'onclick')
    })

    it('Cookie policy link', () => {
        cy
            .get('span > [href="https://www.truecaller.com/cookie-policy"]')
            .should('be.visible')
            .and('have.text', 'Cookie policy')
            .and('have.attr', 'onclick')
    })
})

describe('Footer social media buttons', () => {
    it('Facebook button validation', () => {
        cy
            .get('.footer__social > :nth-child(1) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.facebook.com/Truecaller/')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('Google button validation', () => {
        cy
            .get('.footer__social > :nth-child(2) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://plus.google.com/+truecaller')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('Twitter button validation', () => {
        cy
            .get('.footer__social > :nth-child(3) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://twitter.com/truecaller')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('Instagram button validation', () => {
        cy
            .get('.footer__social > :nth-child(4) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.instagram.com/truecaller/')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('Youtube button validation', () => {
        cy
            .get('.footer__social > :nth-child(5) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.youtube.com/channel/UCtz1lDuJXH7ShIa6n4UAEAg')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('Linkedin button validation', () => {
        cy
            .get('.footer__social > :nth-child(6) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.linkedin.com/company/true-software-scandinavia-ab')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })
})