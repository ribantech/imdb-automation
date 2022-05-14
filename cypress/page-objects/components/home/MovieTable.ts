class MovieTable {
    getMovieTable() {
        return cy.get(`[data-caller-name=chart-top250movie]`);
    }

    getMovieTableDropdown(){
        return cy.get("select#lister-sort-by-options");
    }

    getMovieRows() {
        let table = this.getMovieTable();
        return table.find("tbody.lister-list>tr");
    }

    getMovieRowByIndex(index: number) {
        return cy.get("tbody.lister-list>tr").eq(index);
    }

    getMovieThumbByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("td.posterColumn img");
    }

    getMovieTitleByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("td.titleColumn a")
    }

    getMovieRatingByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("td.ratingColumn>strong")
    }

    getMovieYourRatingByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("td.ratingColumn div.unseen");
    }

    getMovieAddWatchlistByIndex(index: number) {
        let row = this.getMovieRowByIndex(index);
        return row.find("td.watchlistColumn")
    }

    getSortButton(sort: string){
        return cy.get(`span.{sort}`)
    }   


}

export default MovieTable;