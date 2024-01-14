"use client";

import React, { ComponentProps } from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const SubmitButton = ({ children, className }: SubmitButtonProps) => {
  return (
    <button type="submit" className={`btn-primary btn ${className}`}>
      {children}
    </button>
  );
};

export default SubmitButton;
