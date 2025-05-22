import Button from "@/components/shared/Button";
import UserCard from "@/components/users/UserCard";
import { useUsers } from "@/hooks/useUsers/useUsers";

const UserList = () => {
  const { paginatedUsers, currentPage, totalPages, prevPage, nextPage } =
    useUsers();

  return (
    <div>
      <div className="min-h-[400px] space-y-4">
        {paginatedUsers.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </Button>

        <span>
          Page {currentPage} / {totalPages}
        </span>

        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserList;
