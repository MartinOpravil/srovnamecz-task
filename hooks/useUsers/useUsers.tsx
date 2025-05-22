import { useContext } from "react";
import { UsersContext } from "./UsersProvider";

export function useUsers() {
  const ctx = useContext(UsersContext);
  if (!ctx) throw new Error("useUsers must be inside <UsersProvider>");
  return ctx;
}
