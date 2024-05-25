import { WikipediaHomePage } from "./wikipediaHomePage";

export class WikipediaArticlePage extends WikipediaHomePage{
  
  #inactiveWatchListButton = '#ca-watch';
  #activeWatchListButton = '#ca-unwatch';
  #articleTitle = '#firstHeading span';

  getArticleTitle(article: string) {
    cy.get(this.#articleTitle).then(elem => {
      let text=elem.text();
      expect(text).to.eq(article);
  });
  }
  
  addToWatchlist() {
    cy.get(this.#inactiveWatchListButton).click();
  }
  
  deleteFromWatchlist() {
    cy.get(this.#activeWatchListButton).click();
  }

  checkWatchlistButtonStatus(){
    return cy.get('body').then(($body) => {
      if ($body.find(this.#inactiveWatchListButton).length > 0) {
        return 'Inactive';
      } else if ($body.find(this.#activeWatchListButton).length > 0) {
        return 'Active';
      } else if(!this.getUserIcon()) {
          throw new Error('You are not logged to your account');
        }
      })
  }

  waitForWatchlistStatusChange(expectedStatus: string) {
    const statusSelector = expectedStatus === 'Active' ? this.#inactiveWatchListButton : this.#activeWatchListButton;
    cy.get(statusSelector, { timeout: 10000 }).should('exist');
  }
}

export const wikipediaArticlePage = new WikipediaArticlePage();
