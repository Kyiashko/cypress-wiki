export class WikipediaHomePage {
    protected url = 'https://en.wikipedia.org';
    private searchInput = '#simpleSearch';
    private searchButton = '#searchform .cdx-search-input__end-button';
    private userIcon = '#vector-user-links-dropdown-checkbox';

    visit() {
        cy.visit(this.url);
    }
    
    getSearchInput() {
        return cy.get(this.searchInput);
    }
      
    search() {
        cy.get(this.searchButton).click();
    }
    
    searchForArticle(article: string) {
        this.getSearchInput().type(article);
        this.search();
    }

    getUserIcon(){
        return cy.get(this.userIcon);
    }
}

export const wikipediaHomePage = new WikipediaHomePage();
  