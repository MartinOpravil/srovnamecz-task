import { User } from "@/types";
import { USERS_API } from "./constants";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(USERS_API, { cache: "no-store" });
  if (!res.ok)
    throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
  return res.json();
}
