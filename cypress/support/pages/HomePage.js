
class HomePage{
    visit(){
        cy.visit('/');
    }

    getLoginButton(){
        return cy.get('[href="/user/login"]')
    }

    clickLoginButton(){
        this.getLoginButton().click();
    } 

    getProfileButton(){
        return cy.get('[href*="/profile/"]')
    }

    clickProfileButton(){
        this.getProfileButton().click();
    } 

    getTagsList(){
        return cy.get('.tag-list');
    }

    getTagChip(){
        return cy.get('.link.tag-default.tag-pill');
    }

    clickTagChip(){
        this.getTagChip().click();
    } 

    getGlobalFeedMenu(){
        return cy.get('.link').contains('Global Feed');
    }

    getArticleTitle(){
        return cy.get('[class="preview-link"] h1');
    }

    getArticleDescription(){
        return cy.get('[class="preview-link"] p');
    }

    getTagOnArticle(){
        return cy.get('[class*="tag-outline"]');
    }
    
    getArticleAuthor(){
        return cy.get('[class="author"]');
    }

    getLikes(){
        return cy.get('[class="ion-heart"]');
    }
} 

export default new HomePage();
