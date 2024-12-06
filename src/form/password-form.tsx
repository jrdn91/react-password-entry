import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Group, List, Stack, Text, TextInput } from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { passwordSchema } from "./schema";

interface FormInput {
  password: string;
  confirmPassword: string;
}

const PasswordForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="lg">
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="Password"
              withAsterisk
              description={
                <>
                  <Text size="xs">Password must contain:</Text>
                  <List size="xs">
                    <List.Item>One Uppercase Character</List.Item>
                    <List.Item>One Lowercase Character</List.Item>
                    <List.Item>One Special Character</List.Item>
                    <List.Item>At least 6 characters</List.Item>
                    <List.Item>One number</List.Item>
                  </List>
                </>
              }
              placeholder="Password"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="Confirm Password"
              withAsterisk
              placeholder="Password"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <Group justify="flex-end" gap="lg">
          <Button variant="transparent" type="reset">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </Group>
      </Stack>
    </form>
  );
};

export default PasswordForm;
