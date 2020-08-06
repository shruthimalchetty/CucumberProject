package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		plugin={"html:reports/cucumber-html-report", 
				"json:reports/cucumber.json",
				"pretty"},
		tags={"@Regression","@Functional"},
		features="src/test/java/features/", 
		glue={"stepDefination"},
		monochrome=true,
		strict = true
		)

public class TestRunner {

}
