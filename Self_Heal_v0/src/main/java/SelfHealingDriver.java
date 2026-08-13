

import com.selfhealing.ai.AIClient;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SelfHealingDriver {

    private final WebDriver driver;

    private final AIClient aiClient;

    public SelfHealingDriver(
            WebDriver driver,
            AIClient aiClient) {

        this.driver = driver;

        this.aiClient = aiClient;
    }

    public WebElement findElement(By locator) {

        try {

            return driver.findElement(locator);

        } catch (NoSuchElementException e) {

            System.out.println(
                    "❌ Locator failed: " + locator
            );

            System.out.println(
                    "🤖 Asking AI for a replacement..."
            );

            String html =
                    driver.getPageSource();

            String prompt =
                    PromptBuilder.build(
                            locator,
                            html
                    );

            String aiLocator =
                    aiClient.ask(prompt);

            System.out.println(
                    "🤖 AI response: "
                            + aiLocator
            );

            By repairedLocator =
                    ResponseParser.parse(
                            aiLocator
                    );

            System.out.println(
                    "🔧 Trying healed locator: "
                            + repairedLocator
            );

            return driver.findElement(
                    repairedLocator
            );
        }
    }
}