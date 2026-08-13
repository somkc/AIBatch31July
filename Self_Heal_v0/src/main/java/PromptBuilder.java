import org.openqa.selenium.By;

public class PromptBuilder {

    public static String build(
            By failedLocator,
            String html) {

        return """
                
                You are a Selenium automation expert.
                
                A Selenium locator has failed.
                
                Failed locator:
                %s
                
                Find the correct locator from the HTML below.
                
                HTML:
                %s
                
                Return ONLY the corrected locator.
                
                Allowed formats:
                
                id=value
                name=value
                css=value
                xpath=value
                
                Example:
                
                id=user-name
                
                Do not provide explanations.
                
                """.formatted(
                failedLocator,
                html
        );
    }
}