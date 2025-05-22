import Homepage from "@/app/Homepage";
import { UsersProvider } from "@/hooks/useUsers/UsersProvider";
import { getUsers } from "@/lib/getUsers";

export default async function Home() {
  const initialUsers = await getUsers();

  return (
    <UsersProvider initialUsers={initialUsers}>
      <Homepage />
    </UsersProvider>
  );
}
