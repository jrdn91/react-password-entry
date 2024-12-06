import { Card, Flex } from "@mantine/core";
import PasswordForm from "./form/password-form";

function App() {
  return (
    <Flex
      style={{
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card style={{ width: "100%", maxWidth: 340 }}>
        <Card.Section p="md">
          <PasswordForm />
        </Card.Section>
      </Card>
    </Flex>
  );
}

export default App;
