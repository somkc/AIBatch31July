package com.selfhealing.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class OpenAIClient implements AIClient {

    private final String url;

    private final String apiKey;

    private final String model;

    public OpenAIClient() throws IOException {

        url = ConfigReader.get(
                "openai.url"
        );

        apiKey = ConfigReader.get(
                "openai.api.key"
        );

        model = ConfigReader.get(
                "openai.model"
        );
    }

    @Override
    public String ask(String prompt) {

        try {

            ObjectMapper mapper =
                    new ObjectMapper();

            String requestBody =
                    mapper.writeValueAsString(
                            new OpenAIRequest(
                                    model,
                                    prompt
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

                            .header(
                                    "Authorization",
                                    "Bearer " + apiKey
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
                        "OpenAI returned HTTP "
                                + response.statusCode()
                                + "\n"
                                + response.body()
                );
            }

            JsonNode root =
                    mapper.readTree(
                            response.body()
                    );

            JsonNode output =
                    root.get("output");

            for (JsonNode item : output) {

                JsonNode content =
                        item.get("content");

                if (content == null) {
                    continue;
                }

                for (JsonNode contentItem :
                        content) {

                    JsonNode text =
                            contentItem.get("text");

                    if (text != null) {

                        return text
                                .asText()
                                .trim();
                    }
                }
            }

            throw new RuntimeException(
                    "No text found in OpenAI response"
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "OpenAI communication failed",
                    e
            );
        }
    }

    private record OpenAIRequest(
            String model,
            String input
    ) {
    }
}