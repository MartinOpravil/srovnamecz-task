import { User } from "@/types";

const USERS_PER_PAGE = 5;

export function paginate(users: User[], page: number) {
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const paginatedUsers = users.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );
  return { paginatedUsers, totalPages };
}
