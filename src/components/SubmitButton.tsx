"use client";

import React, { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const SubmitButton = ({ children, className, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className={`btn-primary btn ${className}`}
    >
      {pending && <span className="loading loading-dots loading-lg"></span>}
      {children}
    </button>
  );
};

export default SubmitButton;
