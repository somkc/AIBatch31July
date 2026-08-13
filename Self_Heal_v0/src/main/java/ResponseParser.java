import org.openqa.selenium.By;

public class ResponseParser {

    public static By parse(String response) {

        // Remove markdown/code formatting
        response = response
                .replace("```", "")
                .trim();

        if (response.startsWith("id=")) {

            return By.id(
                    response.substring(3).trim()
            );
        }

        if (response.startsWith("name=")) {

            return By.name(
                    response.substring(5).trim()
            );
        }

        if (response.startsWith("css=")) {

            return By.cssSelector(
                    response.substring(4).trim()
            );
        }

        if (response.startsWith("xpath=")) {

            return By.xpath(
                    response.substring(6).trim()
            );
        }

        throw new RuntimeException(
                "Ollama returned an unsupported locator: "
                        + response
        );
    }
}