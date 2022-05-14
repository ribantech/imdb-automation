import HomePage from '../../page-objects/pages/HomePage';
import SearchResultsPage from '../../page-objects/pages/SearchResultPage';

describe('TC7 - IMDB Search validation', () => {
    let appUrl: string = null;
    let envUrl: string = null;
    let testdata = null;
    let homePage: HomePage = null;
    let searchResultPage: SearchResultsPage = null;

    before('Get test data', () => {
        envUrl = Cypress.config().baseUrl;
        homePage = new HomePage();
        searchResultPage = new SearchResultsPage();

        cy.fixture('tc7.json').then(function (data) {
            console.log(data);
            testdata = data
            return testdata;
        });
    });

    it('1. Navigate to IMDB home page', () => {
        appUrl = envUrl + testdata.url;
        cy.visit(appUrl);
        homePage.getPageTitle().getTitle().should('have.text', testdata.title);
    });

    it('2. Validate Search page title for valid search query', () => {
        homePage.getHeader().getSearchBox().type(testdata.validquery);
        homePage.getHeader().getSearchButton().click();
        searchResultPage.getTitle().should('have.text', testdata.searchvalidtitle + "\""+testdata.validquery+"\"");
    });

    it('3. Validate Search page title for invalid search', () => {
        homePage.getHeader().getSearchBox().type(testdata.invalidquery);
        homePage.getHeader().getSearchButton().click();
        searchResultPage.getTitle().should('contain.text', testdata.searchinvalidtitle + "\""+testdata.invalidquery);
    });
});