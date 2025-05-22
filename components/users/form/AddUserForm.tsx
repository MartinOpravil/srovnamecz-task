import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { AddUserFormProps } from "@/components/users/form/types";
import { useUserForm } from "@/components/users/form/useUserForm";

const AddUserForm = ({ onSave }: AddUserFormProps) => {
  const { register, handleSubmit, saveUser, errors } = useUserForm(onSave);

  return (
    <div>
      <h2>Add a new user</h2>
      <form onSubmit={handleSubmit(saveUser)} className="mt-4 space-y-4">
        <Input
          {...register("name")}
          placeholder="Jméno"
          error={errors.name?.message as string}
        />
        <Input
          {...register("email")}
          placeholder="E-mail"
          error={errors.email?.message as string}
        />

        <Button type="submit">Add new user</Button>
      </form>
    </div>
  );
};

export default AddUserForm;
