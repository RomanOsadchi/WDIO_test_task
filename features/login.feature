Feature: Login feature

  Scenario: Checking for a robot during login

    Given I am on the home page
    When I click on enter button
    And I login with saved credentials
    Then I should see recaptcha verification box


