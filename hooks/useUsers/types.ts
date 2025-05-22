import { User } from "@/types";

export type UsersContextType = {
  users: User[];
  paginatedUsers: User[];
  currentPage: number;
  totalPages: number;
  addUser: (user: User) => void;
  nextPage: () => void;
  prevPage: () => void;
};
