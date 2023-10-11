Feature: Shopping cart feature

  Background:
    Given I am on the home page

  Scenario Outline: Add item to shopping cart
    When I type <product name> in input
    Then I can see search popup with searched results
    When I click on 1 suggested item
    Then I should be redirected to product page
    When I click on put in cart button
    And I am on the cart page
    Then I can see that <product name> in the cart
    Examples:
      | product name |
      |Смартфон Apple iPhone 15 Pro Max 256GB (природный титан)|


  Scenario Outline: Add and delete product via API
    Given I authorized user
    When I add <product id> to the cart using API
    And I am on the cart page
    Then I can see that <product name> in the cart
    When I delete <product id> from the cart using API
    And I am on the cart page
    Then I can see that cart is empty
    Examples:
      | product name                                             | product id |
      | Смартфон Apple iPhone 15 Pro Max 256GB (природный титан) | 4155257 |


