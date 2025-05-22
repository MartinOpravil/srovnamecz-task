import { User } from "@/types";

type UserProps = {
  user: User;
};

const UserCard = ({ user }: UserProps) => {
  return (
    <div className="outline outline-accent/25 p-2 rounded">
      <h3>
        <strong>{user.name}</strong>
      </h3>
      <p className="text-sm text-accent/50">{user.email}</p>
    </div>
  );
};

export default UserCard;
