class GenrePage {
    getTitle() {
        return cy.get("h1.header");
    }

    getMovieList() {
        return cy.get('div.lister-list');
    }

    getMovieRows() {
        let elements = this.getMovieList();
        return elements.find("lister-item");
    }

}

export default GenrePage;