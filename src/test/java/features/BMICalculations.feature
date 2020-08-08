Feature: BMI Calculations
   Calculating BMI for five different users 

  @Regression
  Scenario Outline: Calculate BMI
    Given Open Calculator url
    Then verify Calculator page
    When user click on BMI Calculator link
    Then verify BMI Calculator page
    When enter '<age>', '<height>' and '<weight>'
    And user click on Calculate button
    And user get the result
    
  Examples:
  |age|height|weight|
  |10|127|40|
  |30|156|70|
  |25|152|55|
  |20|160|45|
  |35|160|70|
  
