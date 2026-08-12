import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SelfHealingDriver {

    private WebDriver driver;

    public SelfHealingDriver(WebDriver driver){

        this.driver=driver;

    }

    public WebElement findElement(By locator){

        try{

            return driver.findElement(locator);

        }

        catch(NoSuchElementException e){

            System.out.println("Broken locator detected");

            String html = driver.getPageSource();

            String prompt =
                    PromptBuilder.build(locator, html);
            System.out.println("Prompt -> "+prompt);

            String aiLocator =
                    new OllamaClient().ask(prompt);
            System.out.println("aiLocator-> "+aiLocator);

            By repaired =
                    ResponseParser.parse(aiLocator);
            System.out.println("Repaired Locator-> "+repaired);

            return driver.findElement(repaired);

        }

    }

}