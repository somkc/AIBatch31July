import org.openqa.selenium.By;

public class PromptBuilder {

    public static String build(By locator,
                               String html){

        return """

You are an expert Selenium automation engineer.

The following Selenium locator failed.

%s

Below is the HTML.

%s

Return ONLY ONE locator.

Preferred order

id

name

css

xpath

Example

id=user-name

""".formatted(locator.toString(), html);

    }

}