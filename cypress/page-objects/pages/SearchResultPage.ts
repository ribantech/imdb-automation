class SearchResultsPage {
    getTitle() {
        return cy.get("h1.findHeader");
    }

    getResultSection() {
        return cy.get('div.findSection');
    }

    getResultSectionHeader(){
        return cy.find('h3.findSectionHeader');
    }

    getResultSectionTable() {
        return cy.find('table.findList');
    }

}

export default SearchResultsPage;