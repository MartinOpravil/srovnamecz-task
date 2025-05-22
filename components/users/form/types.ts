import { userSchema } from "@/components/users/form/schema";
import { z } from "zod";

export type UserFormData = z.infer<typeof userSchema>;

export type AddUserFormProps = {
  onSave: () => void;
};
