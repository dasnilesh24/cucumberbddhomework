@category
Feature: Category list menu

  Background: As a demo.nopcommerce.com user
  I want view all category
  So that  i can view category products
  url extension

  Scenario Outline: Verify  category page with product
    Given user on home page
    When I click on "<Categories>" category
    Then I should be able see "<respective>" sub-category
    And I should see url with "<extension>"
    Examples:
      | Categories        | respective        | extension         |
      | Computers         | Computers         | computers         |
      | Electronics       | Electronics       | electronics       |
      | Apparel           | Apparel           | apparel           |
      | Digital downloads | Digital downloads | digital-downloads |
      | Books             | Books             | books             |
      | Jewelry           | Jewelry           | jewelry           |
      | Gift Cards        | Gift Cards        | gift-cards        |