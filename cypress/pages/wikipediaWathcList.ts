import { WikipediaHomePage } from "./wikipediaHomePage";

class WikipediaWatchlistPage extends WikipediaHomePage{
    readonly url = '/wiki/Special:EditWatchlist';
    #removeTitlesButton = 'button[type="submit"] .oo-ui-labelElement-label';
    #selectAllArticlesButton = 'input[type="checkbox"][name="wpTitlesNs0[]"]';
    #articleTitle = '#ooui-php-7 > div > div > label > span.oo-ui-labelElement-label > a';

    selectAllTitles(){
        cy.get(this.#selectAllArticlesButton).as("titles").check();
    }

    selectOneArticle(article: string) {
        cy.get(this.#selectAllArticlesButton + `[value="${article}"]`).check();
    }

    getTitleOfArticle(article: string) {
        cy.get(this.#articleTitle).then(elem => {
            let title=elem.attr("title")
            expect(title).to.eq(article);
        });
    }

    openArticle(article: string) {
        cy.contains('a', article).click();
    }

    removeFromWatchlist(){
        cy.get(this.#removeTitlesButton).click();
    }
    
    isArticleInWatchlist(article: string) {
      return cy.contains(article);
    }
    
    selectArticle(article: string){
        cy.get(`input[type="checkbox"][value=${article}]`).check();
    }

    goToArticle(article: string) {
      cy.contains(article).click();
    }
  }
  
  export const wikipediaWatchlistPage = new WikipediaWatchlistPage();
  