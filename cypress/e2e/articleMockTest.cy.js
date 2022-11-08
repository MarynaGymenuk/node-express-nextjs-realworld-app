/// <reference types="cypress" />

import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import {loginViaAPI} from '../support/helper';
import articleMockArray from '../fixtures/articleMock.json';
import likesMockArray from '../fixtures/likesMock.json';
import {faker} from '@faker-js/faker';


beforeEach('Login', () => {
    let randomId = faker.random.alphaNumeric(6);

    articleMockArray.articles[0].title = 'news';
    articleMockArray.articles[0].slug = `${articleMockArray.articles[0].title}-${randomId}`;
    articleMockArray.articles[0].description = 'DESCRIPTION';
    articleMockArray.articles[0].body = 'This is article\'s body';
    articleMockArray.articles[0].createdAt = new Date().toISOString();
    articleMockArray.articles[0].updatedAt = articleMockArray.articles[0].createdAt;
    articleMockArray.articles[0].tagList[0] = "my tag";

    cy.intercept('GET', '**/articles?limit=10&offset=0', articleMockArray);

    loginViaAPI(user);
});

it('Check article', () => {
    homePage.visit();
    homePage.getProfileButton().should('be.visible');
    homePage.getGlobalFeedMenu().click();

    homePage.getArticleTitle().should('contain', articleMockArray.articles[0].title);
    homePage.getArticleDescription().should('contain', articleMockArray.articles[0].description);
    homePage.getTagOnArticle().should('contain', articleMockArray.articles[0].tagList[0]);
    homePage.getArticleAuthor().should('contain', articleMockArray.articles[0].author.username);





    

    likesMockArray.article.slug = articleMockArray.articles[0].slug;
    likesMockArray.article.createdAt = articleMockArray.articles[0].createdAt;
    likesMockArray.article.updatedAt = likesMockArray.article.createdAt;


    likesMockArray.article.favorited = true;
    likesMockArray.article.favoritesCount = 5;

    cy.intercept('POST', `**/articles/${likesMockArray.article.slug}/favorite`, likesMockArray);

    homePage.getLikes().click();


});