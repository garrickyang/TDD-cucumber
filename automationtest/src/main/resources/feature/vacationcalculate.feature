Feature: Vacation query

  Scenario Outline: Vacation for Senior Associate within 1 year is 15 days
    Given  User Navigate to vacation quary Page "http://localhost:8080/index.html"
    When User enter job band "<jobBand>" and service year <serviceYear>
    And User submit query form
    Then Result page shows <vacationDays> days for this case

    Examples:
    |jobBand          |serviceYear|vacationDays|
    |Senior Assonicate|1          |15          |


