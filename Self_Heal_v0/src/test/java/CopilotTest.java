import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.MessageOptions;
import com.github.copilot.rpc.PermissionHandler;
import com.github.copilot.rpc.SessionConfig;

public class CopilotTest {

    public static void main(String[] args) throws Exception {

        try (var client = new CopilotClient()) {

            client.start().get();

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
                                    .setPrompt(
                                            "Return only: Hello"
                                    )
                    ).get();

            System.out.println(
                    response.getData().content()
            );

            client.stop().get();
        }
    }
}