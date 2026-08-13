package com.selfhealing.ai;

import java.io.IOException;

public class AIClientFactory {

    public static AIClient create() throws IOException {

        String provider =
                ConfigReader.get("ai.provider");

        if (provider.equalsIgnoreCase("ollama")) {

            return new OllamaClient();
        }

        if (provider.equalsIgnoreCase("openai")) {

            return new OpenAIClient();
        }

        if (provider.equalsIgnoreCase("copilot")) {

            return new CopilotClientAI();
        }

        throw new RuntimeException(
                "Unsupported AI provider: "
                        + provider
        );
    }
}