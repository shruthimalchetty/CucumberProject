package stepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import utilities.Setup;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	
	static WebDriver driver;
	Setup setup;
	
	@Before
	public void doSetUp() throws Exception {
		Setup setup = new Setup();
		setSetUp(setup);
		driver = setup.launchBrowser();
		driver.manage().window().maximize();
	}
	
	
	@After
	public void tearDown() throws Exception {
		driver.quit();
	}
	
	public void setSetUp(Setup setup) throws Exception {
		this.setup = setup;
	}
	

}
