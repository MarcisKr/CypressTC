describe('Early automation of new page..', () => {
const page = "https://next.truecaller.com";
    beforeEach(function () {
        cy
            .visit(page)
    })

    /*it('Write something in search bar', () => {
        cy
            .get('.Search__Query')
            .type('735358210', { delay: 100, force: true})
    })*/

    /*it('Top spammer number is filled in', () => {
        cy
            .get('.Search__Query')
            .click()
        cy
            .get('.flex')
            .click()
    })*/

    it('Toggle night mode on and off', () => {
        const colorOfDarkTheme = 'rgb(233, 234, 236)';
        const colorOfLightTheme = 'rgb(40, 51, 57)';
        //if block that makes sure that initial theme is light. 
        cy
            .get('.User__Avatar > svg')
            .click()
        cy
            .get('main').should(($el) => {
                expect($el).to.have.css('color', colorOfDarkTheme)//color of night theme
            })
        //another assert that makes sure that theme image changes
    })
})