Feature: Login feature

  Scenario: Checking for a robot during login

    Given I am on the home page
    When I click on login button
    And I login with saved credentials
    Then I should see recaptcha verification box


  Scenario: Clicking recovery link redirect to /recover-password

    Given I am on the home page
    When I click on login button
    And I click on recovery link
    Then I should be redirected "https://profile.onliner.by/recover-password" url
