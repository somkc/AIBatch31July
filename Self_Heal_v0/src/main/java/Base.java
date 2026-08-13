

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.selfhealing.ai.AIClient;
import com.selfhealing.ai.AIClientFactory;

public class Base {

    public static void main(String[] args)
            throws Exception {

        WebDriver driver =
                new ChromeDriver();

        driver.manage()
                .window()
                .maximize();

        driver.get(
                "https://www.saucedemo.com"
        );

        // AI provider comes from config.properties
        AIClient aiClient =
                AIClientFactory.create();

        SelfHealingDriver healingDriver =
                new SelfHealingDriver(
                        driver,
                        aiClient
                );

        // Intentionally incorrect
        healingDriver
                .findElement(
                        By.id("user-name123")
                )
                .sendKeys(
                        "standard_user"
                );

        // Intentionally incorrect
        healingDriver
                .findElement(
                        By.id("password123")
                )
                .sendKeys(
                        "secret_sauce"
                );

        // Intentionally incorrect
        healingDriver
                .findElement(
                        By.id("login-button123")
                )
                .click();

        System.out.println(
                "Login successful"
        );

        Thread.sleep(3000);

        driver.quit();
    }
}