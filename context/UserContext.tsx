"use client";

import { onAuthChanged } from "@/utils/firebase/authService";
import { User } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
  user: User | null;
  setUser: (newState: User) => void;
};

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal);
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
      value={{ isOpenModal, setIsOpenModal, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
