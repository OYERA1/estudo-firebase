"use client";

import { onAuthChanged } from "@/utils/firebase/authService";
import { User } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  user: User | null;
  setUser: (newState: User) => void;
};

const initialValue = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User | null>(initialValue.user);

  useEffect(() => {
    async function fetchData() {
      const unsubscribe = onAuthChanged(async (authUser) => {
        setUser(authUser);
      });

      return unsubscribe;
    }

    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
