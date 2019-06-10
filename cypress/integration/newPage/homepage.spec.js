import homePage from "../../elements/pages/newHomePage/homePage";

describe("Homepage tests", () => {
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