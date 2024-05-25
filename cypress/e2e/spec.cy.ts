import { wikipediaHomePage } from '../pages/wikipediaHomePage';
import { wikipediaArticlePage } from '../pages/wikiArticlePage';
import { wikipediaWatchlistPage } from '../pages/wikipediaWathcList';

describe('Wikipedia Watchlist', () => {
  const articles = ['Cypress (software)', 'TypeScript'];

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginUI(); // Assuming you have a custom command for logging in
  });

  it('Adds two pages to the watchlist', () => {
    wikipediaHomePage.visit();

    articles.forEach(article => {
      wikipediaHomePage.searchForArticle(article);

      // Check the watchlist status and add to watchlist if not already added
      wikipediaArticlePage.checkWatchlistButtonStatus().then(status => {
        if (status === 'Inactive') {
          wikipediaArticlePage.addToWatchlist();
          wikipediaArticlePage.waitForWatchlistStatusChange('Active');
        }
      });
      cy.wait(2000);
      // Verify the article is in the watchlist
      wikipediaArticlePage.checkWatchlistButtonStatus().should('eq', 'Active');
    });
  });

  it('Removes one article from the watchlist', () => {
    wikipediaWatchlistPage.visit();
    wikipediaWatchlistPage.selectOneArticle(articles[0]);
    wikipediaWatchlistPage.removeFromWatchlist();
    wikipediaWatchlistPage.visit();
    wikipediaWatchlistPage.isArticleInWatchlist(articles[0]).should('not.exist');
  });

  it('Verifies the second article is still in the watchlist', () => {
    wikipediaWatchlistPage.visit();
    wikipediaWatchlistPage.isArticleInWatchlist(articles[1]).should('exist');
  });

  it('Verifies the title of the article in the watchlist', () => {
    wikipediaWatchlistPage.visit();
    wikipediaWatchlistPage.getTitleOfArticle(articles[1]);
    wikipediaWatchlistPage.goToArticle(articles[1]);
    wikipediaArticlePage.getArticleTitle(articles[1]);
  });

  after(() => {
    wikipediaWatchlistPage.visit();
    wikipediaWatchlistPage.selectAllTitles();
    wikipediaWatchlistPage.removeFromWatchlist();
  })
});
