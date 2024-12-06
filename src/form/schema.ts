import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/g, "Password should have at least 1 uppercase letter")
      .regex(/[a-z]/g, "Password should have at least 1 lowercase letter")
      .regex(
        /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/g,
        "Password should have at least 1 special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
