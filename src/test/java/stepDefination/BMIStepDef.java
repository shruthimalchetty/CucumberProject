package stepDefination;


import org.hamcrest.Matcher;

import pageObjects.BMIPage;
import pageObjects.CalculatorPage;
import utilities.Setup;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.containsString;

public class BMIStepDef extends Setup{
	
	CalculatorPage cpage = new CalculatorPage();
	BMIPage bpage = new BMIPage();
	
	@Given("^Open Calculator url$")
	public void open_Calculator_url() throws Throwable {
		cpage.openUrl();	    
	}

	@Then("^verify Calculator page$")
	public void verify_Calculator_page() throws Throwable {
	  assertThat(cpage.getCalculatorPageTitle(), containsString("Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science"));
	}	

	@When("^user click on BMI Calculator link$")
	public void user_click_on_BMI_Calculator_link() throws Throwable {
	    cpage.clickOnBMILink();
	}

	@Then("^verify BMI Calculator page$")
	public void verify_BMI_Calculator_page() throws Throwable {
		assertThat(bpage.getBMIPageTitle(), containsString("BMI Calculator"));
	    
	}

	@When("^enter '(.*)', '(.*)' and '(.*)'$")
	public void enter_and(String arg1, String arg2, String arg3) throws Throwable {
	   bpage.setAge(arg1);
	   bpage.setHeight(arg2);
	   bpage.setWeight(arg3); 
	}

	@When("^user click on Calculate button$")
	public void user_click_on_Calculate_button() throws Throwable {
	   bpage.clickOnCalculator();	   
	}

	@When("^user get the result$")
	public void user_get_the_result() throws Throwable {
	  bpage.showBMIIndex();
	}
	
	@When("^Close the browser$")
	public void close_the_browser() throws Throwable{
		driver.quit();
	}

}
