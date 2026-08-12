import org.openqa.selenium.By;

public class ResponseParser {

    public static By parse(String response){

        if(response.startsWith("id="))

            return By.id(response.replace("id=",""));

        if(response.startsWith("name="))

            return By.name(response.replace("name=",""));

        if(response.startsWith("css="))

            return By.cssSelector(response.replace("css=",""));

        return By.xpath(response);

    }

}