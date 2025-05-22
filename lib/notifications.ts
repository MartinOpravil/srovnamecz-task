import { toast } from "sonner";

export function notifySuccess(title: string, description?: string | null) {
  toast(title, {
    className: "!bg-secondary",
    duration: 5000,
    description,
    style: {
      border: "none",
    },
  });
}

export function notifyError(
  title: string,
  description?: string | null,
  duration: number = 10000
) {
  toast(title, {
    className: "!bg-primary",
    duration,
    description,
    style: {
      border: "none",
    },
  });
}

export function notifyInfo(title: string, description?: string | null) {
  toast(title, {
    className: "!bg-accent",
    description,
    duration: 5000,
    style: {
      border: "none",
    },
  });
}
