import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SelfHealingDriver {
	private WebDriver driver;
	
	public SelfHealingDriver(WebDriver driver) {
		this.driver=driver;
	}

	public WebElement findElement(By locator) {
		
		try {
			return driver.findElement(locator);
		}
		catch(NoSuchElementException e) {
			System.out.println(locator +" -> Broker locator detected");
			String html=driver.getPageSource();
			String prompt=PromptBuilder.build(locator, html);
			String ailocator=new OllamaClient().ask(prompt);
			By repaired=ResponseParser.parse(ailocator);
			
			return driver.findElement(repaired);
			
		}
	}

}
