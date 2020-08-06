Feature: Login module
  I want to login into a application successfully

  @run
  Scenario: Login as authenticated user
    Given user is on homepage
    When user navigates to login page 
    And user enters username and password 
    Then success message should display 
