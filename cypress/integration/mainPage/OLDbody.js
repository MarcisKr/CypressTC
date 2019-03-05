describe('Body section', () => {

    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Download now button', () => {
        cy
            .get('.home-download-button')
            .contains('Download now')
            .should('be.visible')
            .and('have.attr', 'href', 'https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dtcweb&rdid=com.truecaller')
            .and('have.attr', 'target', '_blank')
    })

    it('Know more button', () => {
        cy
            .get('.btn--black')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.youtube.com/watch?v=r12OvTFymmc')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
        cy
            .get('.btn--black > span')
            .contains('Know more')
    })
})