import homePage from "../../elements/pages/newHomePage/homePage";

describe("Homepage tests", () => {
    describe("Login cases", () => {
        it("I can log in as a google user", () => {
            const home = new homePage();
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
        })

        it("Open information about user account", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/me";
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
            home.clickElement(home.sideMenu.buttonUserMenu());
            home.clickElement(home.sideMenu.buttonUserAccountPrivacy());
            home.validateURL(link);
            home.sideMenu.validateAccountInfo();
            cy.wait(1000);
            })

        it("Validate account email links for support", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/me";
            home.visitURL(link);
            home.sideMenu.validateAccountSupportEmail(home.sideMenu.buttonUserSupportOne());
            home.sideMenu.validateAccountSupportEmail(home.sideMenu.buttonUserSupportTwo());
        })

        it("I can log out as a google user", () => {
            const home = new homePage();
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
            home.clickElement(home.sideMenu.buttonUserMenu());
            home.clickElement(home.sideMenu.buttonUserLogout());
            home.sideMenu.validateUserLoggedOut();
        })

        it("Recaptcha error", () =>{
            const home = new homePage();
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
            home.enterSearchNumber("+37128338009");
            home.clickElement(home.buttonSearch());
            cy.wait(700);
            home.validateRecaptchaError();
        })
    })

    it("Download options shown when opened from main page", () => {
        const home = new homePage();
        home.visitURL();
        home.clickElement(home.buttonDownload());
        home.validateDownloadPopup();
    })

    it("See all features", () => {
        const home = new homePage();
        const link = "https://www.truecaller.com/features";
        home.visitURL();
        home.clickElement(home.buttonAllFeatures());
        home.validateURL(link);
    })

    it("Download options shown when opened from features page", () => {
        const home = new homePage();
        const link = "https://www.truecaller.com/features";
        home.visitURL(link);
        home.clickElement(home.buttonFeaturesDownload());
        home.validateDownloadPopup();
    })

    describe("Feature buttons", () => {
        it("Caller ID feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonCallerID());
            home.validateFeatureText("Caller ID");
        })

        it("Spam Blocking feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonSpamProtection());
            home.validateFeatureText("Spam Blocking");
        })

        it("Intelligent Dialer feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonDialer());
            home.validateFeatureText("Intelligent dialer");
        })

        it("Chat, SMS and Calls feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonMessaging());
            home.validateFeatureText("Chat, SMS and Calls");
        })

        it("Banking feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonPay());
            home.validateFeatureText("Banking");
        })
    })
    describe("Footer contractual links", () => {
        it("Recaptcha PP link validation", () => {
            const home = new homePage();
            home.visitURL();
            home.footer.validateCaptchaPP();
        });

        it("Recaptcha TOS link validation", () => {
            const home = new homePage();
            home.visitURL();
            home.footer.validateCaptchaTOS();
        })

        it("TC TOS link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/terms-of-service#row";
            home.visitURL();
            home.clickElement(home.footer.buttonTOS());
            home.validateURL(link);
        })

        it("TC PP link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/privacy-policy#row";
            home.visitURL();
            home.clickElement(home.footer.buttonPP());
            home.validateURL(link);
        })

        it("TC CP link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/cookie-policy";
            home.visitURL();
            home.clickElement(home.footer.buttonCP());
            home.validateURL(link);
        })

        it("TC Directory link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/directory";
            home.visitURL();
            home.clickElement(home.footer.buttonDirectory());
            home.validateURL(link);
        })

        it("TC RD link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/responsible-disclosure";
            home.visitURL();
            home.clickElement(home.footer.buttonRD());
            home.validateURL(link);
        })
    })
})