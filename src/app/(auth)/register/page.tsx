"use client";

import MyButton from "@/src/components/button/page";
import MyForm from "@/src/components/form/page";
import MyInput from "@/src/components/inputs/page";
import Link from "next/link";
import { register } from "@/utils/firebase/authService";
import { FormEvent, useState } from "react";
import { User } from "firebase/auth";

interface RegisterProps {
  onRegisterSuccess: (user: User) => void;
}

export default function Register() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const user = await register(
        newUser.email,
        newUser.password,
        newUser.name
      );

      console.log(user);
    } catch (error) {
      alert(error);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <div className="flex flex-col items-center">
      <MyForm className="flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-8">
          <MyInput
            label="nome"
            type="text"
            id={"name"}
            placeholder="Insira seu nome"
            onChange={handleInputChange}
          />
          <MyInput
            label="email"
            type="email"
            id={"email"}
            placeholder="Insira seu email"
            onChange={handleInputChange}
          />

          <MyInput
            label="senha"
            showPasswordToggle
            type="password"
            id={"password"}
            placeholder="Insira sua senha"
            onChange={handleInputChange}
          />
        </div>
        <MyButton>Cadastrar</MyButton>
        <div className="flex justify-around mt-6">
          <Link href="/login">
            Já tem uma conta? Fazer{" "}
            <span className="text-red-900 hover:text-red-700 hover:underline">
              login!
            </span>
          </Link>
        </div>
      </MyForm>
    </div>
  );
}
