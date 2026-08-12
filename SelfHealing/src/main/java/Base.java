import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Base {

    public static void main(String[] args) throws Exception {

       // WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("https://www.saucedemo.com");

        SelfHealingDriver healingDriver =
                new SelfHealingDriver(driver);

        healingDriver.findElement(By.id("user-name123"))
                .sendKeys("standard_user");

        healingDriver.findElement(By.id("password123"))
                .sendKeys("secret_sauce");

        healingDriver.findElement(By.id("login-button123"))
                .click();

    }

}