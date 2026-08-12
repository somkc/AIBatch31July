import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class OllamaClient {

    private static final String OLLAMA_URL =
            "http://localhost:11434/api/generate";

    private static final String MODEL =
            "qwen2.5:7b";

    public String ask(String prompt) {

        try {

            ObjectMapper objectMapper = new ObjectMapper();

            // Create request JSON
            String requestBody = objectMapper.writeValueAsString(
                    new OllamaRequest(
                            MODEL,
                            prompt,
                            false
                    )
            );

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(OLLAMA_URL))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpClient client = HttpClient.newHttpClient();

            HttpResponse<String> response =
                    client.send(
                            request,
                            HttpResponse.BodyHandlers.ofString()
                    );

            if (response.statusCode() != 200) {

                throw new RuntimeException(
                        "Ollama returned HTTP status: "
                                + response.statusCode()
                );
            }

            System.out.println("Response "+response.toString());
            // Parse Ollama response
            JsonNode jsonResponse =
                    objectMapper.readTree(response.body());
            System.out.println("jsonReponse -> "+jsonResponse.asText());

            String result =
                    jsonResponse.get("response").asText();

            return result.trim();

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to communicate with Ollama",
                    e
            );
        }
    }

    /**
     * Request object sent to Ollama
     */
    private record OllamaRequest(
            String model,
            String prompt,
            boolean stream
    ) {
    }
}