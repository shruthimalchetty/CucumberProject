package pageObjects;

import net.bytebuddy.asm.Advice.Return;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import utilities.Setup;

public class CalculatorPage extends Setup{

	
  /**Get Link for BMI
  **/
  public WebElement getLinkBMI(){
	  return driver.findElement(By.xpath("//a[contains(text(),'BMI Calculator')]"));
  }
  
  public void openUrl() throws Exception {
	  driver.get("https://www.calculator.net/");
  }
  
  public String getCalculatorPageTitle() throws Exception {
	  return driver.getTitle();
  }
  
  public void clickOnBMILink() throws Exception {
	  getLinkBMI().click();
	  Thread.sleep(2000);
  }
  
  
	
	
}
