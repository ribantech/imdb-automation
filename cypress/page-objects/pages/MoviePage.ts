class MoviePage {
    getTitle() {
        return cy.get(`h1[data-testid=hero-title-block__title]`);
    }

    getMovieList() {
        return cy.get('div.lister-list');
    }

    getMovieRows() {
        let elements = this.getMovieList();
        return elements.find("lister-item");
    }

    getMovieRowByIndex(index: number) {
        return cy.get("div.lister-item").eq(index);
    }

    getMovieThumbByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("div.lister-item-image img");
    }

    getMovieTitleByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("td.titleColumn a")
    }


}

export default MoviePage;