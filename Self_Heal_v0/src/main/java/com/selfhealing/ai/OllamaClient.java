package com.selfhealing.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class OllamaClient implements AIClient {

    private final String url;

    private final String model;

    public OllamaClient() throws IOException {

        url = ConfigReader.get(
                "ollama.url"
        );

        model = ConfigReader.get(
                "ollama.model"
        );
    }

    @Override
    public String ask(String prompt) {

        try {

            ObjectMapper mapper =
                    new ObjectMapper();

            String requestBody =
                    mapper.writeValueAsString(
                            new OllamaRequest(
                                    model,
                                    prompt,
                                    false
                            )
                    );

            HttpRequest request =
                    HttpRequest.newBuilder()

                            .uri(
                                    URI.create(url)
                            )

                            .header(
                                    "Content-Type",
                                    "application/json"
                            )

                            .POST(
                                    HttpRequest
                                            .BodyPublishers
                                            .ofString(
                                                    requestBody
                                            )
                            )

                            .build();

            HttpClient client =
                    HttpClient.newHttpClient();

            HttpResponse<String> response =
                    client.send(
                            request,
                            HttpResponse.BodyHandlers
                                    .ofString()
                    );

            if (response.statusCode() != 200) {

                throw new RuntimeException(
                        "Ollama returned HTTP "
                                + response.statusCode()
                );
            }

            JsonNode json =
                    mapper.readTree(
                            response.body()
                    );

            return json
                    .get("response")
                    .asText()
                    .trim();

        } catch (Exception e) {

            throw new RuntimeException(
                    "Ollama communication failed",
                    e
            );
        }
    }

    private record OllamaRequest(
            String model,
            String prompt,
            boolean stream
    ) {
    }
}