$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BMICalculations.feature");
formatter.feature({
  "line": 1,
  "name": "BMI Calculations",
  "description": " Calculating BMI for five different users",
  "id": "bmi-calculations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmi-calculations;calculate-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Calculator url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify BMI Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u0027\u003cage\u003e\u0027, \u0027\u003cheight\u003e\u0027 and \u0027\u003cweight\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user get the result",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "# And Close the browser"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "bmi-calculations;calculate-bmi;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 16,
      "id": "bmi-calculations;calculate-bmi;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 17,
      "id": "bmi-calculations;calculate-bmi;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 18,
      "id": "bmi-calculations;calculate-bmi;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 19,
      "id": "bmi-calculations;calculate-bmi;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 20,
      "id": "bmi-calculations;calculate-bmi;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 21,
      "id": "bmi-calculations;calculate-bmi;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21736667100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmi-calculations;calculate-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Calculator url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify BMI Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u002710\u0027, \u0027127\u0027 and \u002740\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user get the result",
  "keyword": "And "
});
formatter.match({
  "location": "BMIStepDef.open_Calculator_url()"
});
formatter.result({
  "duration": 4232135200,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_Calculator_page()"
});
formatter.result({
  "duration": 138133900,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_BMI_Calculator_link()"
});
formatter.result({
  "duration": 5385211300,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_BMI_Calculator_page()"
});
formatter.result({
  "duration": 1943664500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    },
    {
      "val": "127",
      "offset": 13
    },
    {
      "val": "40",
      "offset": 23
    }
  ],
  "location": "BMIStepDef.enter_and(String,String,String)"
});
formatter.result({
  "duration": 2144502100,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_Calculate_button()"
});
formatter.result({
  "duration": 4265408900,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_get_the_result()"
});
formatter.result({
  "duration": 13968895100,
  "status": "passed"
});
formatter.after({
  "duration": 11877707700,
  "status": "passed"
});
formatter.before({
  "duration": 10434547100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmi-calculations;calculate-bmi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Calculator url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify BMI Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u002730\u0027, \u0027156\u0027 and \u002770\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user get the result",
  "keyword": "And "
});
formatter.match({
  "location": "BMIStepDef.open_Calculator_url()"
});
formatter.result({
  "duration": 3748707400,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_Calculator_page()"
});
formatter.result({
  "duration": 123676600,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_BMI_Calculator_link()"
});
formatter.result({
  "duration": 12091651400,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_BMI_Calculator_page()"
});
formatter.result({
  "duration": 105627300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 7
    },
    {
      "val": "156",
      "offset": 13
    },
    {
      "val": "70",
      "offset": 23
    }
  ],
  "location": "BMIStepDef.enter_and(String,String,String)"
});
formatter.result({
  "duration": 3230322800,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_Calculate_button()"
});
formatter.result({
  "duration": 3941038400,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_get_the_result()"
});
formatter.result({
  "duration": 29389723700,
  "status": "passed"
});
formatter.after({
  "duration": 70156559000,
  "status": "passed"
});
formatter.before({
  "duration": 9439735600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmi-calculations;calculate-bmi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Calculator url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify BMI Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u002725\u0027, \u0027152\u0027 and \u002755\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user get the result",
  "keyword": "And "
});
formatter.match({
  "location": "BMIStepDef.open_Calculator_url()"
});
formatter.result({
  "duration": 3991868100,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_Calculator_page()"
});
formatter.result({
  "duration": 158300800,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_BMI_Calculator_link()"
});
formatter.result({
  "duration": 5482579100,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_BMI_Calculator_page()"
});
formatter.result({
  "duration": 279119700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 7
    },
    {
      "val": "152",
      "offset": 13
    },
    {
      "val": "55",
      "offset": 23
    }
  ],
  "location": "BMIStepDef.enter_and(String,String,String)"
});
formatter.result({
  "duration": 4879600700,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_Calculate_button()"
});
formatter.result({
  "duration": 4304796900,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_get_the_result()"
});
formatter.result({
  "duration": 17739717400,
  "status": "passed"
});
formatter.after({
  "duration": 39996819400,
  "status": "passed"
});
formatter.before({
  "duration": 12993406000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmi-calculations;calculate-bmi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Calculator url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify BMI Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u002720\u0027, \u0027160\u0027 and \u002745\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user get the result",
  "keyword": "And "
});
formatter.match({
  "location": "BMIStepDef.open_Calculator_url()"
});
formatter.result({
  "duration": 4175502800,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_Calculator_page()"
});
formatter.result({
  "duration": 44581000,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_BMI_Calculator_link()"
});
formatter.result({
  "duration": 5329685200,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_BMI_Calculator_page()"
});
formatter.result({
  "duration": 2723234700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 7
    },
    {
      "val": "160",
      "offset": 13
    },
    {
      "val": "45",
      "offset": 23
    }
  ],
  "location": "BMIStepDef.enter_and(String,String,String)"
});
formatter.result({
  "duration": 3174931300,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_Calculate_button()"
});
formatter.result({
  "duration": 4104734400,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_get_the_result()"
});
formatter.result({
  "duration": 37550134000,
  "status": "passed"
});
formatter.after({
  "duration": 39137663800,
  "status": "passed"
});
formatter.before({
  "duration": 11234983100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmi-calculations;calculate-bmi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Calculator url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify BMI Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u002735\u0027, \u0027160\u0027 and \u002770\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user get the result",
  "keyword": "And "
});
formatter.match({
  "location": "BMIStepDef.open_Calculator_url()"
});
formatter.result({
  "duration": 4577401600,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_Calculator_page()"
});
formatter.result({
  "duration": 216719100,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_BMI_Calculator_link()"
});
formatter.result({
  "duration": 5963680500,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.verify_BMI_Calculator_page()"
});
formatter.result({
  "duration": 428539100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 7
    },
    {
      "val": "160",
      "offset": 13
    },
    {
      "val": "70",
      "offset": 23
    }
  ],
  "location": "BMIStepDef.enter_and(String,String,String)"
});
formatter.result({
  "duration": 25582644100,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_click_on_Calculate_button()"
});
formatter.result({
  "duration": 4138411700,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDef.user_get_the_result()"
});
formatter.result({
  "duration": 22992077700,
  "status": "passed"
});
formatter.after({
  "duration": 57313728100,
  "status": "passed"
});
});