$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login module",
  "description": "I want to login into a application successfully",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login as authenticated user",
  "description": "",
  "id": "login-module;login-as-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "success message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 406811300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.success_message_should_display()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
});