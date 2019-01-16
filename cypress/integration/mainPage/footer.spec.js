describe('Footer "Product" section', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('User can navigate using "Get the app" link', () => {
        cy
            .get(':nth-child(1) > [href="/truecaller"]')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/truecaller')
    })

    it('User can open "Support" from footer', () => {
        cy
            .get(':nth-child(1) > [href="https://support.truecaller.com"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://support.truecaller.com')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })
})

describe('Footer "Company" section', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('User can navigate using "About" link', () => {
        cy
            .get('.footer-top > :nth-child(2) > [href="/about"]')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/about')
    })

    it('User can navigate using "Press" link', () => {
        cy
            .get('.footer-top > :nth-child(2) > [href="/press"]')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/press')
    })

    it('User can navigate using "Careers" link', () => {
        cy
            .get('.footer-top > :nth-child(2) > [href="/careers"]')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/careers')
    })

    it('User can navigate using "Contact" link', () => {
        cy
            .get('.footer-top > :nth-child(2) > [href="/contact"]')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/contact')
    })

    it('User can navigate using "Impact" link', () => {
        cy
            .get('.footer-top > :nth-child(2) > [href="/impact"]')
            .click()
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/impact')
    })
})

describe('Footer "Services" section', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('User can open "Developers" from footer', () => {
        cy
            .get(':nth-child(3) > [href="https://developer.truecaller.com/"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://developer.truecaller.com/')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('User can open "Advertisers" from footer', () => {
        cy
            .get(':nth-child(3) > [href="https://advertisers.truecaller.com/"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://advertisers.truecaller.com/')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('User can open "Business" from footer', () => {
        cy
            .get(':nth-child(3) > [href="https://business.truecaller.com/"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://business.truecaller.com/')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })
})

describe('Footer contractual links', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })
    
    it('User can open and see "Terms of Service" from footer', () => {
        cy
            .get('[href="/terms-of-service#eu"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/terms-of-service')
            // .then(resp => {
            //     expect(resp.status).to.eq(200);
            //     expect(resp.body).to.have.property('<h2>TRUECALLER TERMS OF SERVICE</h2>');
            //     expect(resp.body).to.have.property('<h3>15. Governing Law</h3>')
            // })
            .its('body').should('include', '<h2>TRUECALLER TERMS OF SERVICE</h2>')
    })

    it('User can open and see "Privacy Policy" from footer', () => {
        cy
            .get('[href="/privacy-policy#eu"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/privacy-policy')
            .its('body').should('include', '<h2>TRUECALLER PRIVACY POLICY</h2>')
    })

    it('User can open and see "Cookie Policy" from footer', () => {
        cy
            .get('span > [href="/cookie-policy"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/cookie-policy')
            .its('body').should('include', '<h2>Truecaller Cookie Policy</h2>')
    })

    it('User can open and see "Directory" from footer', () => {
        cy
            .get('span > [href="/directory"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/directory')
            .its('body').should('include', '<a href="/directory/spammers" class="ListItem"><div class="ListItem__Icon"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg></div><div class="ListItem__Info"><div>Spammers</div><div>Truecallers top reported spammers</div></div></a>')
    })

    it('User can open and see "Responsible disclosure" from footer', () => {
        cy
            .get('span > [href="/responsible-disclosure"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/responsible-disclosure')
            .its('body').should('include', '<h2>Truecaller Responsible Disclosure</h2>')
    })
})

describe('Footer social media buttons', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Facebook button validation', () => {
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(1) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.facebook.com/Truecaller/')
            .and('have.attr', 'target', '_blank')
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(1) > a > img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfZmFjZWJvb2s8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE4IDM2QzggMzYgMCAyOCAwIDE4UzggMCAxOCAwczE4IDggMTggMTgtOCAxOC0xOCAxOHptMS43LTIzYzAtMSAwLTEuNCAxLjQtMS40SDIzVjguMkgyMGMtMy4zIDAtNC41IDEuNy00LjUgNC40djJoLTJWMThoMnY5LjhoNC4yVjE4aDIuOGwuNC0zLjRoLTMuM1YxM3oiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMCAwaDM2djM2SDB6Ii8+PC9nPjwvc3ZnPg==')
    })

    it('Google button validation', () => {
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(2) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://plus.google.com/+truecaller')
            .and('have.attr', 'target', '_blank')
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(2) > a > img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNfZ29vZ2xlcGx1czwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMDAwMDAwLCAtODQuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOCwxMjAgQzI4LjA1ODg1NzEsMTIwIDIwLDExMS45NDExNDMgMjAsMTAyIEMyMCw5Mi4wNTg4NTcxIDI4LjA1ODg1NzEsODQgMzgsODQgQzQ3Ljk0MTE0MjksODQgNTYsOTIuMDU4ODU3MSA1NiwxMDIgQzU2LDExMS45NDExNDMgNDcuOTQxMTQyOSwxMjAgMzgsMTIwIFogTTQ2LjcxODgzODcsOTguMTg2NDQwNyBDNDYuNzEwNDA4Niw5OS4wMzgyMzczIDQ2LjcwMTk3ODUsOTkuODkwMDMzOSA0Ni42OTc3NjM0LDEwMC43NDU3OTcgQzQ1Ljg1Mjk0NjIsMTAwLjc1MDM3MyA0NS4wMTI2NDUyLDEwMC43NTQ2NDQgNDQuMTcyMDQzLDEwMC43NjMxODYgTDQ0LjE3MjA0MywxMDMuMzA5NzI5IEM0NS4wMTI2NDUyLDEwMy4zMTgyNzEgNDUuODU3MTYxMywxMDMuMzI2ODE0IDQ2LjY5Nzc2MzQsMTAzLjMzNTM1NiBDNDYuNzA2MTkzNSwxMDQuMTg2ODQ3IDQ2LjcwNjE5MzUsMTA1LjAzODY0NCA0Ni43MTQ2MjM3LDEwNS44OTA0NDEgTDQ5LjIzMTkxNCwxMDUuODkwNDQxIEM0OS4yMzYxMjksMTA1LjAzODY0NCA0OS4yNDAzNDQxLDEwNC4xODY4NDcgNDkuMjQ4Nzc0MiwxMDMuMzMxMDg1IEM1MC4wOTM1OTE0LDEwMy4zMjI1NDIgNTAuOTM0MTkzNSwxMDMuMzE4MjcxIDUxLjc3NDQ5NDYsMTAzLjMwOTcyOSBMNTEuNzc0NDk0NiwxMDAuNzYzMTg2IEM1MC45MzQxOTM1LDEwMC43NTQ2NDQgNTAuMDg5Mzc2MywxMDAuNzU0NjQ0IDQ5LjI0ODc3NDIsMTAwLjc0NTc5NyBDNDkuMjQwMzQ0MSw5OS44OTQzMDUxIDQ5LjIzNjEyOSw5OS4wMzgyMzczIDQ5LjIzMTkxNCw5OC4xODY0NDA3IEw0Ni43MTg4Mzg3LDk4LjE4NjQ0MDcgWiBNMjQuMDIzNTA1NCwxMDEuNTE1NzIxIEMyMy43MzIwNjQ1LDEwNS4yOTA1MzQgMjYuMTgxOTE0LDEwOC45OTI3MzggMjkuNjQwOTY3OCwxMTAuMzI4MDkzIEMzMy4wODc2Nzc0LDExMS42NzE5OTIgMzcuNTA1MzU0OSwxMTAuNzU2MTI3IDM5LjcwNTkxNCwxMDcuNjE4OTQxIEM0MS4xNTg5MDMzLDEwNS42Mzc0MTUgNDEuNDcxNDE5NCwxMDMuMDg2NjAyIDQxLjMwMjUxNjIsMTAwLjY4OTg1NiBDMzguNDgxMTM5OCwxMDAuNjY4MTk1IDM1LjY2Mzk3ODUsMTAwLjY3Mjc3MSAzMi44NDY4MTcyLDEwMC42ODEzMTQgQzMyLjg0MjYwMjIsMTAxLjY5OTY4NyAzMi44NDY4MTcyLDEwMi43MTgzNjUgMzIuODUxMDMyMywxMDMuNzM3MDQzIEMzNC41MzYxNTA2LDEwMy43OTI1NjggMzYuMjI1Nzg1LDEwMy43NjY5NDEgMzcuOTEwOTAzMywxMDMuNzkyNTY4IEMzNy4xNjc1NDg0LDEwNy41ODA1IDMyLjA4MjM4NzEsMTA4LjgwODc3MSAyOS4zOTE5Nzg1LDEwNi4zMzQ4MzkgQzI2LjYyNTM5NzksMTA0LjE2NTA3NiAyNi43NTYzNjU2LDk5LjQwNTc1NDUgMjkuNjMyNTM3Nyw5Ny4zOTAwNTk1IEMzMS42NDMxMTgzLDk1Ljc2MzY1MjggMzQuNTAyNDMwMSw5Ni4xNjYwNTk1IDM2LjUxMzAxMDgsOTcuNTc0MDI1NyBDMzcuMzAyNzMxMiw5Ni44MzM1ODUgMzguMDQxODcxLDk2LjA0MTg5MDEgMzguNzU1NzIwNSw5NS4yMTk5OTE4IEMzNy4wODMyNDczLDkzLjg2NzU1MTEgMzUuMDMwNTE2Miw5Mi45MDQ3MDM2IDMyLjg0NjgxNzIsOTMuMDA3NTE3MiBDMjguMjg5NDQwOSw5Mi44NTM0NDk0IDI0LjA5OTY3NzQsOTYuODk3NjUyOCAyNC4wMjM1MDU0LDEwMS41MTU3MjEgWiIgaWQ9ImljX2dvb2dsZXBsdXMiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')
    })

    it('Twitter button validation', () => {
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(3) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://twitter.com/truecaller')
            .and('have.attr', 'target', '_blank')
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(3) > a > img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfdHdlZXRlcjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTggMzZDOCAzNiAwIDI4IDAgMThTOCAwIDE4IDBzMTggOCAxOCAxOC04IDE4LTE4IDE4em0xMC4yLTI1LjRjLS44LjUtMS44LjgtMi44IDEtLjgtLjgtMi0xLjMtMy4yLTEuMy0yLjUgMC00LjUgMS44LTQuNSA0djFjLTMuNSAwLTYuOC0xLjctOS00LjMtLjQuNy0uNiAxLjQtLjYgMiAwIDEuNiAxIDIuOCAyIDMuNi0uNyAwLTEuMy0uMi0yLS41IDAgMiAxLjYgMy44IDMuNiA0LjJoLTJjLjYgMS43IDIuMiAzIDQuMiAzLTEuNiAxLTMuNSAxLjctNS41IDEuN2gtMWMyIDEgNC4yIDEuNyA2LjcgMS43IDguMiAwIDEyLjYtNi4zIDEyLjYtMTEuOHYtLjZjMS0uNiAxLjYtMS4zIDIuMi0yLjItLjguNC0xLjYuNi0yLjUuNyAxLS42IDEuNi0xLjQgMi0yLjR6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTAgMGgzNnYzNkgweiIvPjwvZz48L3N2Zz4=')
    })

    it('Instagram button validation', () => {
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(4) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.instagram.com/truecaller/')
            .and('have.attr', 'target', '_blank')
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(4) > a > img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfaW5zdGE8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE4IDM2QzggMzYgMCAyOCAwIDE4UzggMCAxOCAwczE4IDggMTggMTgtOCAxOC0xOCAxOHptMTAuMi0yMHYtNC4zYzAtMi4yLTEuNy00LTQtNEgxMS44Yy0yLjIgMC00IDEuOC00IDR2MTIuNmMwIDIuMiAxLjggNCA0IDRoMTIuNmMyLjIgMCA0LTEuOCA0LTRWMTZ6bS00IDEwLjJIMTEuOGMtMSAwLTItLjgtMi0yVjE2aDNjLS4yLjUtLjMgMS4zLS4zIDIgMCAzIDIuNSA1LjYgNS42IDUuNiAzIDAgNS42LTIuNSA1LjYtNS42IDAtLjctLjItMS41LS40LTJoM3Y4LjNjMCAxLS44IDItMiAyem0tMS44LTE2SDI2djMuNGgtMy42VjEwek0xOCAyMS41Yy0yIDAtMy42LTEuNi0zLjYtMy42IDAtLjguMi0xLjUuNy0yIC43LTEgMS44LTEuNiAzLTEuNnMyLjMuNiAzIDEuNWMuMy41LjYgMS4yLjYgMiAwIDItMS42IDMuNi0zLjYgMy42eiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0wIDBoMzZ2MzZIMHoiLz48L2c+PC9zdmc+')
    })

    it('Youtube button validation', () => {
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(5) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.youtube.com/channel/UCtz1lDuJXH7ShIa6n4UAEAg')
            .and('have.attr', 'target', '_blank')
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(5) > a > img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfeW91dHViZTwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTggMzZDOCAzNiAwIDI4IDAgMThTOCAwIDE4IDBzMTggOCAxOCAxOC04IDE4LTE4IDE4ek0xNCA2bC0xIDMuN0wxMiA2aC0xLjNjLjIgMSAuNSAxLjguOCAyLjZsMSAzVjE1aDEuMnYtMy43TDE1LjQgNkgxNHptNSA0LjZjMC0uNyAwLTEuMi0uNC0xLjYtLjMtLjQtLjgtLjctMS40LS43LS42IDAtMSAuMy0xLjQuNy0uMy40LS40IDEtLjQgMS42VjEzYzAgLjcgMCAxLjIuNCAxLjYuMy41LjguNyAxLjQuNy42IDAgMS0uMiAxLjQtLjcuMy0uNC40LTEgLjQtMS42di0yLjR6bTQuNS0yLjJoLTEuMnY1LjJjLS4zLjQtLjUuNi0uOC42IDAgMC0uMiAwLS4zLS4zVjguM0gyMHY2LjRjLjIuMy41LjUgMSAuNS4zIDAgLjgtLjMgMS4zLTF2MWgxLjJ2LTd6bTQuMiA5LjhjLS4zLTEtMS0yLTIuMi0yLTIuNS0uMy01LS4zLTcuNS0uM3MtNSAwLTcuNS4yYy0xIDAtMiAxLTIuMiAyLS4zIDEuNS0uMyAzLS4zIDQuNyAwIDEuNSAwIDMgLjMgNC42LjMgMSAxIDIgMi4yIDIgMi41LjMgNSAuMyA3LjUuM3M1IDAgNy41LS40YzEgMCAyLTEgMi4yLTIgLjMtMS41LjMtMyAuMy00LjcgMC0xLjcgMC0zLjMtLjMtNC44em0tMS41IDguMmMtLjMuNS0uOC43LTEuNC43LS43IDAtMS4yIDAtMS41LS41LS4zLS40LS40LTEtLjQtMS42di0yLjVjMC0uNyAwLTEuMi4zLTEuNS4zLS41LjgtLjcgMS40LS43LjYgMCAxIC4yIDEuNS43LjIuMy4zLjguMyAxLjVWMjRIMjR2MWMwIC43LjMgMSAuNyAxIC4zIDAgLjUgMCAuNi0uNHYtMWgxLjJ2MWMwIC4zIDAgLjUtLjMuN3ptLTItMy41aDF2LS43YzAtLjYgMC0xLS41LTEtLjQgMC0uNi40LS42IDF2LjZ6bS0zLjMgNGMtLjYgMC0xIDAtMS40LS42di43aC0xLjJ2LTloMS4ydjNjLjQtLjUuOC0uNyAxLjMtLjcuNCAwIC43LjIuOC43bC4yIDEuNFYyNWMwIC43IDAgMS0uMiAxLjQgMCAuNS0uNC43LTEgLjd6bS0uMi00LjdjMC0uNi0uMi0xLS42LTEtLjIgMC0uNC4yLS42LjR2NGwuNi4zYy40IDAgLjYtLjMuNi0xdi0yLjd6bS00LjcgNGMtLjMuNi0uOC44LTEuMi44LS40IDAtLjcgMC0uOC0uNHYtNi4yaDF2NS40bC40LjJjLjIgMCAuNSAwIC43LS41di01aDEuNFYyN0gxNnYtLjd6bS0zLjguOEgxMXYtNy43SDkuNFYxOGg0LjJ2MS4zaC0xLjVWMjd6bTUtMTIuOGMtLjQgMC0uNi0uMy0uNi0xdi0yLjhjMC0uNi4yLTEgLjYtMSAuNCAwIC42LjQuNiAxdjIuOGMwIC43LS4yIDEtLjYgMXoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMCAwaDM2djM2SDB6Ii8+PC9nPjwvc3ZnPg==')
    })

    it('Linkedin button validation', () => {
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(6) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.linkedin.com/company/true-software-scandinavia-ab')
            .and('have.attr', 'target', '_blank')
        cy
            .get('#app > div.footer > div > div.footer-top > div.footer-social > div:nth-child(6) > a > img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfbGlua2VkaW48L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE4IDM2QzggMzYgMCAyOCAwIDE4UzggMCAxOCAwczE4IDggMTggMTgtOCAxOC0xOCAxOHptLTguNS05LjJoNFYxNS42aC00djExLjJ6bTItMTYuNWMtMS40IDAtMi4zLjgtMi4zIDIgMCAxIDEgMS44IDIuMiAxLjggMS40IDAgMi4zLS43IDIuMy0xLjggMC0xLTEtMi0yLjItMnptMTYuMyAxMGMwLTMuMy0yLTUtNC42LTUtMiAwLTMgMS0zLjYgMnYtMS43aC00djExLjJoNHYtNi4zLTFjLjQtLjUgMS0xLjIgMi4yLTEuMiAxLjQgMCAyIDEgMiAyLjV2Nmg0di02LjR6bS04LjItM3oiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMCAwaDM2djM2SDB6Ii8+PC9nPjwvc3ZnPg==')
    })
})