"use client";

import { createContext, useState } from "react";
import { notifySuccess } from "@/lib/notifications";
import { UsersContextType } from "@/hooks/useUsers/types";
import { User } from "@/types";
import { paginate } from "@/hooks/useUsers/usePagination";

export const UsersContext = createContext<UsersContextType | undefined>(
  undefined
);

export function UsersProvider({
  initialUsers,
  children,
}: {
  initialUsers: User[];
  children: React.ReactNode;
}) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);

  const { paginatedUsers, totalPages } = paginate(users, currentPage);

  const addUser = (user: User) => {
    setUsers((prev) => [user, ...prev]);
    setCurrentPage(1);
    notifySuccess("User successfully added.");
  };

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <UsersContext.Provider
      value={{
        users,
        paginatedUsers,
        currentPage,
        totalPages,
        addUser,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
