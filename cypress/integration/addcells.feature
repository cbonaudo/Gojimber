Feature: Add cells

Scenario: Home page
  Given I am on the main page
  Then I should see 32 cells
  
Scenario: Click on add
  Given I am on the main page
  When I click on add-button
  Then I should see 64 cells
  
Scenario: Click on add several times
  Given I am on the main page
  When I click on add-button
  And I click on add-button
  And I click on add-button
  Then I should see 128 cells