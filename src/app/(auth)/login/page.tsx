"use client";

import MyButton from "@/src/components/button/page";
import MyForm from "@/src/components/form/page";
import Link from "next/link";
import MyInput from "@/src/components/inputs/page";
import { FormEvent, useState } from "react";
import { login } from "@/utils/firebase/authService";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handlerLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await login(form.email, form.password);

      console.log(response);
    } catch (err) {
      alert("deu erro aqui");
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <div className="flex flex-col items-center">
      <MyForm className="" onSubmit={handlerLogin}>
        <MyInput
          label="email"
          type="email"
          id="email"
          placeholder="Insira seu email"
          onChange={handleInputChange}
        />

        <MyInput
          id="password"
          showPasswordToggle
          label="senha"
          type="password"
          placeholder="Insira sua senha"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlerLogin(e as any);
            }
          }}
        />
        <MyButton className="mt-8">Entrar</MyButton>
        <div className="flex w-full justify-around mt-6">
          <Link href="/reset">Esqueci a senha</Link>
          <Link href="/register">Criar conta agora!</Link>
        </div>
      </MyForm>
    </div>
  );
}
