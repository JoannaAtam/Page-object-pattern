import Login from "../../support/pages/Login";
import HomePage from "../../support/pages/HomePage";

describe("User can visit GoIT page", () => {
  const loginPage = new Login();
  const homePage = new HomePage();

  beforeEach("Go to page", () => {
    loginPage.visit();
  });

  it("Find box and pass user email", () => {
    cy.fixture("userData").then((user) => {
      loginPage.fillEmail(user.email);
      loginPage.fillPassword(user.password);
      loginPage.submit();
      homePage.openMenu();
      homePage.logOut();
    });
  });
});