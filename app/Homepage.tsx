"use client";

import Button from "@/components/shared/Button";
import ControlBar from "@/components/shared/ControlBar";
import AddUserForm from "@/components/users/form/AddUserForm";
import UserList from "@/components/users/UserList";
import { useState } from "react";

const Homepage = () => {
  const [isNewFormOpen, setIsNewFormOpen] = useState(false);

  const toggleIsNewFormOpen = () => setIsNewFormOpen((prev) => !prev);

  return (
    <main className="page">
      <ControlBar>
        <Button onClick={toggleIsNewFormOpen}>
          {isNewFormOpen ? "Back" : "Add"}
        </Button>
      </ControlBar>

      {isNewFormOpen ? (
        <AddUserForm onSave={() => setIsNewFormOpen(false)} />
      ) : (
        <UserList />
      )}
    </main>
  );
};

export default Homepage;
