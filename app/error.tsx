"use client";

import Button from "@/components/shared/Button";
import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <main className="page flex flex-col gap-8 items-center justify-center min-h-[500px] p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="!text-negative">Something went wrong!</h1>
        <p className="mt-2 text-accent">{error.message}</p>
      </div>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
