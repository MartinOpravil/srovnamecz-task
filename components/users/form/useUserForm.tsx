import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUsers } from "@/hooks/useUsers/useUsers";
import { userSchema } from "./schema";
import { UserFormData } from "@/components/users/form/types";

export function useUserForm(onSave: () => void) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const { addUser } = useUsers();

  const saveUser = (data: UserFormData) => {
    const newUser = {
      ...data,
      id: Date.now(),
    };
    addUser(newUser);
    reset();
    onSave();
  };

  return { register, handleSubmit, saveUser, errors };
}
