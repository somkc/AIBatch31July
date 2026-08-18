import java.io.IOException;

public class TestOllama {

    public static void main(String[] args) throws IOException {

        OllamaClient client = new OllamaClient();

        String response = client.ask(
                "Return only the word Hello"
        );

        System.out.println("Ollama response:");
        System.out.println(response);
    }
}