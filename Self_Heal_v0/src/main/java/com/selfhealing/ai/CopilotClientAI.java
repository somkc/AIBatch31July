package com.selfhealing.ai;


import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.MessageOptions;
import com.github.copilot.rpc.PermissionHandler;
import com.github.copilot.rpc.SessionConfig;

public class CopilotClientAI implements AIClient {

    private final CopilotClient client;

    public CopilotClientAI() {

        client = new CopilotClient();

        try {

            client.start().get();

        } catch (Exception e) {

            throw new RuntimeException(
                    "Unable to start GitHub Copilot",
                    e
            );
        }
    }

    @Override
    public String ask(String prompt) {

        try {

            var session =
                    client.createSession(
                            new SessionConfig()
                                    .setModel("gpt-4.1")
                                    .setOnPermissionRequest(
                                            PermissionHandler.APPROVE_ALL
                                    )
                    ).get();

            var response =
                    session.sendAndWait(
                            new MessageOptions()
                                    .setPrompt(prompt)
                    ).get();

            return response
                    .getData()
                    .content()
                    .trim();

        } catch (Exception e) {

            throw new RuntimeException(
                    "GitHub Copilot request failed",
                    e
            );
        }
    }

    public void close() {

        try {

            client.stop().get();

        } catch (Exception e) {

            e.printStackTrace();

        }
    }
}