Feature: End to end ecommerce validation

    Feature Description

    @Regression
    Scenario: Ecommerce products delivery
    Given the user opens the ecommerce page
    When the user adds items to cart
    Then the total should match the sum of the individual items
    And the thank you message should be displayed

    @Smoke
    Scenario: Fill form to shop
    Given the user opens the ecommerce page
    When the user fills the form details
            | name    | gender |
            | Mariane | Female |
    Then the form behaviour should be correct
    Given the user selects the shop page