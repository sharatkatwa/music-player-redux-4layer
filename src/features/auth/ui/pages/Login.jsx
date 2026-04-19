import { AudioWaveform } from "lucide-react";
import React from "react";
import Input from "../components/input";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: onchange,
  });
  
    const { navigate,handleLogin } = useAuth(reset);
  



  return (
    <div className="flex flex-col justify-center items-center w-fit mx-auto gap-8">
      <div className="space-y-6">
        <AudioWaveform size={50} className="text-green mx-auto" />
        <h1 className="text-5xl font-extrabold text-center capitalize">
          Welcome Back
        </h1>
      </div>

      <form className="w-full space-y-4" onSubmit={handleSubmit(handleLogin)}>
     
        <Input
          label={"Email"}
          register={register}
          name={"email"}
          rules={{ required: "email is required" }}
          type={"email"}
          placeholder={"Enter your email"}
          error={errors.email}
        />

        <Input
          label={"Password"}
          register={register}
          name={"password"}
          rules={{ required: "Password is required" }}
          type={"text"}
          placeholder={"Enter your pasword"}
          error={errors.password}
        />

        <button
          type="submit"
          className="bg-green font-semibold active:scale-[.95] transition-scale  rounded-full text-black/95 w-full py-3"
        >
          Login
        </button>
      </form>
      <div className="py-5">
        <p className="text-xs">
          Don't Have an account{" "}
          <span onClick={() => navigate("/auth/signup")} className="text-green cursor-pointer">
            Signup Here...
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login