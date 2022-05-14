import GenrePage from '../../page-objects/pages/GenrePage';
import HomePage from '../../page-objects/pages/HomePage';
import SearchResultsPage from '../../page-objects/pages/SearchResultPage';

describe('TC8 - Genre validation', () => {
    let appUrl: string = null;
    let envUrl: string = null;
    let testdata = null;
    let homePage: HomePage = null;
    let genrePage: GenrePage = null;

    before('Get test data', () => {
        envUrl = Cypress.config().baseUrl;
        homePage = new HomePage();
        genrePage = new GenrePage();

        cy.fixture('tc8.json').then(function (data) {
            console.log(data);
            testdata = data
            return testdata;
        });
    });

    beforeEach(() => {
        cy.viewport(1280, 720)
    });

    it('1. Navigate to IMDB home page', () => {
        appUrl = envUrl + testdata.url;
        cy.visit(appUrl);
        homePage.getPageTitle().getTitle().should('have.text', testdata.title);
    });

    it('2. Click on Genre link', () => {
        homePage.getRightSidebar().getGenreLinkByName(testdata.genre).click();
    });

    it('3. Validate Genre page title', () => {
        let title: string = testdata.genretitle;
        title = title.replace("PLACEHOLDER", testdata.genre);
        genrePage.getTitle().should('have.text', title);
    });

});