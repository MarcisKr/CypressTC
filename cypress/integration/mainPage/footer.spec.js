import homePage from '../../elements/pages/homePage/homePage';

describe('Footer "Product" section', () => {

    it('User can navigate using "Get the app" link', () => {
        const home = new homePage();

        home.visit();
        home.footer.openGetApp();
        const url = 'https://www.truecaller.com/truecaller';
        home.validateURL(url);
    })

    it('User can open "Support" from footer', () => {
        const home = new homePage();
        
        home.visit();
        home.footer.validateLinkSupport();
    })
})

describe('Footer "Company" section', () => {

    it('User can navigate using "About" link', () => {
        const home = new homePage();
        
        home.visit();
        home.footer.openAbout();
        const url = 'https://www.truecaller.com/about';
        home.validateURL(url);
    })

    it('User can navigate using "Press" link', () => {
        const home = new homePage();

        home.visit();
        home.footer.openPress();
        const url = 'https://www.truecaller.com/press';
        home.validateURL(url);
    })

    it('User can navigate using "Careers" link', () => {
        const home = new homePage();

        home.visit();
        home.footer.openCareers();
        const url = 'https://www.truecaller.com/careers';
        home.validateURL(url);
    })

    it('User can navigate using "Contact" link', () => {
        const home = new homePage();

        home.visit();
        home.footer.openContact();
        const url = 'https://www.truecaller.com/contact';
        home.validateURL(url);
    })

    it('User can navigate using "Impact" link', () => {
        const home = new homePage();
        
        home.visit();
        home.footer.openImpact();
        const url = 'https://www.truecaller.com/impact';
        home.validateURL(url);
    })
})

describe('Footer "Services" section', () => {

    it('User can open "Developers" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkDevelopers();
    })

    it('User can open "Advertisers" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkAdvertisers();
    })

    it('User can open "Business" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkBusiness();
    })
})

describe('Footer contractual links', () => {
    
    it('User can open and see "Terms of Service" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkTOS();
    })

    it('User can open and see "Privacy Policy" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkPP();
    })

    it('User can open and see "Cookie Policy" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkCP();
    })

    it('User can open and see "Directory" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkDirectory();
    })

    it('User can open and see "Responsible disclosure" from footer', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateLinkRD();
    })
})

describe('Footer social media buttons', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Facebook button validation', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateButtonFacebook();
    })

    it('Google button validation', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateButtonGoogle();
    })

    it('Twitter button validation', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateButtonTwitter();
    })

    it('Instagram button validation', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateButtonInstagram();
    })

    it('Youtube button validation', () => {
        const home = new homePage();

        home.visit();
        home.footer.validateButtonYoutube();
    })

    it('Linkedin button validation', () => {
        const home = new homePage();
        
        home.visit();
        home.footer.validateButtonLinkedin();
    })
})