"use client";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "bg-teal-500 border-teal-500",
          description: "",
          actionButton: "",
          cancelButton: "",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
