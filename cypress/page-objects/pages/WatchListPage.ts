class WatchListPage {
    getTitle() {
        return cy.get("div.lister-header h1");
    }

    getEmptyWatchlistText() {
        return cy.get("span.empty-watchlist-text");
    }

    getItemCountTitle(){
        return cy.get("div.lister-details");
    }

    getWatchListItemByIndex(index: number){
        return cy.get("div.featureFilm").eq(index);
    }

    getWatchListItemTitleByIndex(index: number) {
        let row = this.getWatchListItemByIndex(index);
        return row.find("h3.lister-item-header>a")
    }

}

export default WatchListPage;