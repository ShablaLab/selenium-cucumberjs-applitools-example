@login
Feature: Login to the Saucelabs demo application
  User should be able to login

  Scenario Outline: An Example scenario to demonstrate the scenario outline
    Given I am on the login home page
    When I login with username as "<username>" and password as "<password>"
    Then I should be able to login successfully
    Then Verify the screen for the visual test "Successful Login Page"
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | standard_user | wrong_secret_sauce |
