import { User } from "@/types";
import { api } from "./axios";
import { ENDPOINTS } from "@/lib/constants";

export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get<User[]>(ENDPOINTS.USERS);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
}
