import homePage from "../../elements/pages/newHomePage/homePage";

describe("Sidemenu", () => {
    describe("Sign in", () => {
        it("Open sign in", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/auth/sign-in";
            home.visitURL();
            home.sideMenu.navigateSignIn();
            home.validateURL(link);
        });

        it("Validate Terms of service", () => {
            const home = new homePage();
            home.sideMenu.navigateSignIn();
            home.sideMenu.validateSignInTOS();
        });

        it("Validate Privacy Policy", () => {
            const home = new homePage();
            home.sideMenu.navigateSignIn();
            home.sideMenu.validateSignInPP();
        })
    })

    describe("Truecaller premium", () => {
        it("Open Truecaller premium", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/premium";
            home.visitURL();
            home.sideMenu.navigatePremium();
            home.validateURL(link);
        });
    })

    describe("About Truecaller", () => {
        it("Open About Truecaller", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/about";
            home.visitURL();
            home.sideMenu.navigateAbout();
            home.validateURL(link);
        });
    })

    describe("Board and management", () => {
        it("Open Board and management", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/board-and-management";
            home.visitURL();
            home.sideMenu.navigateBoard();
            home.validateURL(link);
        });
    })

    describe("Media kit", () => {
        it("Open Media kit", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/media-kit";
            home.visitURL();
            home.sideMenu.navigateMedia();
            home.validateURL(link);
        });

        it("Validate Download buttons", () => {
            const home = new homePage();
            home.sideMenu.navigateMedia();
            home.sideMenu.validateMediaDownloads();
        });
    })

    describe("Careers", () => {
        it("Open Careers", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/careers";
            home.visitURL();
            home.sideMenu.navigateCareers();
            home.validateURL(link);
        });
    })

    describe("Blog", () => {
        it("Validate Blog", () => {
            const home = new homePage();
            home.sideMenu.validateBlog();
        });
    })

    describe("Advertisers", () => {
        it("Validate Advertisers", () => {
            const home = new homePage();
            home.sideMenu.validateAdvertisers();
        });
    })

    describe("Businesses", () => {
        it("Validate Businesses", () => {
            const home = new homePage();
            home.sideMenu.validateBusinesses();
        });
    })

    describe("Developers", () => {
        it("Validate Developers", () => {
            const home = new homePage();
            home.sideMenu.validateAdvertisers();
        });
    })

    describe("Support", () => {
        it("Validate Support", () => {
            const home = new homePage();
            home.sideMenu.validateSupport();
        });
    })

    describe("Theme", () => {
        it("Switch to dark theme and back", () => {
            const home = new homePage();
            home.sideMenu.validateTheme('light');
            home.sideMenu.clickNightMode();
            home.sideMenu.validateTheme('dark');
        });
    })
})