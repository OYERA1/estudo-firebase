"use client";

import { FiEye, FiEyeOff } from "react-icons/fi";

import React, { useState, useCallback } from "react";

interface InputTypes {
  id: string;
  label: string;
  type: "text" | "password" | "email";
  className?: string;
  showPasswordToggle?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function MyInput({
  label,
  type,
  className,
  showPasswordToggle,
  id,
  ...props
}: InputTypes) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePassword = useCallback(() => {
    setPasswordVisibility(!passwordVisibility);
  }, [passwordVisibility]);

  return (
    <div className={`flex flex-col gap-2 w-full  ${className}`}>
      <label htmlFor={id} className="capitalize">
        {label}
      </label>
      <div className="flex items-center pr-4 mb-8 border-white rounded-md border-2  justify-between">
        <input
          autoComplete="off"
          id={id}
          type={
            type === "password"
              ? passwordVisibility
                ? "text"
                : "password"
              : type
          }
          min={type === "password" ? 8 : undefined}
          className="bg-transparent outline-none pl-2 h-[30px] w-full placeholder:text-zinc-400"
          {...props}
        />
        {showPasswordToggle && (
          <button onClick={togglePassword} type="button">
            {passwordVisibility ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
    </div>
  );
}
