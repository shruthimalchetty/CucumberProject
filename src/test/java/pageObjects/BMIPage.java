package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import utilities.Setup;

public class BMIPage extends Setup{
	
	
	public WebElement getTextBoxAge() throws Exception {
		return driver.findElement(By.cssSelector("#cage"));
	}
	
	public WebElement getTextBoxHeight() throws Exception {
		return driver.findElement(By.cssSelector("#cheightmeter"));
	}
	
	public WebElement getTextBoxWeight() throws Exception {
		return driver.findElement(By.cssSelector("#ckg"));
	}
	
	public WebElement getButtonCalculator() throws Exception {
		return driver.findElement(By.xpath("//input[@value='Calculate']"));
	}
	
	public WebElement getTextResult() throws Exception {
		return driver.findElement(By.xpath("//h2[@class='h2result']//following-sibling::div/b"));
	}
	
	
	public String getBMIPageTitle() throws Exception {
		return driver.getTitle();
	}
	
	public void setAge(String age) throws Exception {
		getTextBoxAge().clear();
		getTextBoxAge().sendKeys(age);
	}
	
	public void setHeight(String height) throws Exception {
		getTextBoxHeight().clear();
		getTextBoxHeight().sendKeys(height);
	}
	
	public void setWeight(String weight) throws Exception {
		getTextBoxWeight().clear();
		getTextBoxWeight().sendKeys(weight);
	}
	
	public void clickOnCalculator() throws Exception {
		getButtonCalculator().click();
		Thread.sleep(2000);
	}
	
	public void showBMIIndex() throws Exception {
		System.out.println(getTextResult().getText());
	}

}
