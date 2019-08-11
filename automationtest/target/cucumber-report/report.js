$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("vacationcalculate.feature");
formatter.feature({
  "line": 1,
  "name": "Vacation query",
  "description": "",
  "id": "vacation-query",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Vacation for Senior Associate within 1 year is 15 days",
  "description": "",
  "id": "vacation-query;vacation-for-senior-associate-within-1-year-is-15-days",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to vacation quary Page \"http://localhost:8080/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter job band \"\u003cjobBand\u003e\" and service year \u003cserviceYear\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User submit query form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Result page shows \u003cvacationDays\u003e days for this case",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "vacation-query;vacation-for-senior-associate-within-1-year-is-15-days;",
  "rows": [
    {
      "cells": [
        "jobBand",
        "serviceYear",
        "vacationDays"
      ],
      "line": 10,
      "id": "vacation-query;vacation-for-senior-associate-within-1-year-is-15-days;;1"
    },
    {
      "cells": [
        "Senior Assonicate",
        "1",
        "15"
      ],
      "line": 11,
      "id": "vacation-query;vacation-for-senior-associate-within-1-year-is-15-days;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Vacation for Senior Associate within 1 year is 15 days",
  "description": "",
  "id": "vacation-query;vacation-for-senior-associate-within-1-year-is-15-days;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to vacation quary Page \"http://localhost:8080/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter job band \"Senior Assonicate\" and service year 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User submit query form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Result page shows 15 days for this case",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/index.html",
      "offset": 38
    }
  ],
  "location": "VacationCalculateSteps.user_Navigate_to_vacation_quary_Page(String)"
});
formatter.result({
  "duration": 5450482142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senior Assonicate",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "VacationCalculateSteps.user_enter_job_band_and_service_year(String,String)"
});
formatter.result({
  "duration": 294600486,
  "status": "passed"
});
formatter.match({
  "location": "VacationCalculateSteps.user_submit_quary_form()"
});
formatter.result({
  "duration": 864370465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 18
    }
  ],
  "location": "VacationCalculateSteps.result_page_shows_days_for_this_case(String)"
});
formatter.result({
  "duration": 62729139,
  "status": "passed"
});
});