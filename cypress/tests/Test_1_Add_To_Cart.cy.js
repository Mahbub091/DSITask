/// <reference types="cypress" />

import test from "../support/testUtils";
import swagPage from "../pages/swagLabsPage"
import swagLabsPage from "../pages/swagLabsPage";

describe('User Add Desired Product To Cart', () => {
    it('User navigates to desired website', () => {
         test.navigateToURL(Cypress.env("APPURL"));
         test.validateURL(Cypress.env("APPURL"));

         swagPage.enterUserName(Cypress.env("USER"));
         swagPage.enterUserPassword(Cypress.env("PASSWORD"));
         swagPage.clicksOnLoginButton();

         swagLabsPage.openingSideMenu();
         swagLabsPage.resettingAppStatus();
         swagPage.clickingOnSidebarClose();

         cy.clickOnAddToCart();

       swagLabsPage.openingSideMenu();
       swagLabsPage.resettingAppStatus();
       swagLabsPage.clickingOnLogOut();
    
     });

    });