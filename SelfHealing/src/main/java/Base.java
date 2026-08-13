import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Base {

    public static void main(String[] args) throws Exception {

       // WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("https://www.saucedemo.com");
        SelfHealingDriver healingDriver = new SelfHealingDriver(driver);
      
        healingDriver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user");
        healingDriver.findElement(By.xpath("//input[@id='password1']")).sendKeys("secret_sauce");
		
        healingDriver.findElement(By.xpath("//input[@id='login-button']")).click();
		Thread.sleep(3000);
		healingDriver.findElement(By.xpath("//span[@class='title']"));

      
    }

}