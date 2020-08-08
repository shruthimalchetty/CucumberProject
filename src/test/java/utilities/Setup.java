package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Setup {
	
	public static WebDriver driver;
	
	public WebDriver launchBrowser() throws Exception {
		System.setProperty("webdriver.chrome.driver", "./res/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		return driver;
	}
	
	
	
	

}
