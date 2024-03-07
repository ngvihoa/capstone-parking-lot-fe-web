"use client";

import Logo from "@/img/logo-black.png";
import React from "react";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import { useAppSelector } from "@/redux/store";

const Login = () => {
  // const { username, uid, role } = useAppSelector(
  //   (state) => state.authReducer.value
  // );

  return (
    <div
      id="login-page"
      className="flex justify-center w-full h-dvh items-center text-base"
    >
      {/* <div>
        <div>Username: {username}</div>
        <div>Uid: {uid}</div>
        <div>Role: {role}</div>
      </div> */}
      <div className="shadow-none sm:shadow-lg bg-none sm:bg-white flex flex-col gap-8 w-full items-start p-10 rounded-lg sm:w-3/5 lg:w-2/5">
        {/* Logo */}
        <div className="flex flex-col ml-px gap-3 w-full items-start">
          <Image
            src={Logo}
            priority={true}
            alt="Logo"
            id="logo"
            className="h-[60px] aspect-[178.476/60]"
          />
          <div className="bg-[#d9d9d9] w-full h-px rounded-[99px]" />
        </div>
        {/* heading */}
        <div className="text-lg sm:text-2xl font-bold">
          Welcome back, Login.
        </div>
        {/* form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
