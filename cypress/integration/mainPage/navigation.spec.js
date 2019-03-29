import homePage from '../../elements/pages/homePage/homePage';
import aboutPage from '../../elements/pages/homePage/aboutPage';
import downloadPage from '../../elements/pages/homePage/downloadPage';

describe('Navigation test cases', () => {
    it('Clicking truecaller logo brings me home', () => {
        const home = new homePage();
        const about = new aboutPage();
        
        about.visit();
        home.navigateToMainPage();
    })

    it('Navigate to Downloads page', () => {
        const home = new homePage();
        
        home.visit();
        home.navigateToDownloadPage();
    })
})