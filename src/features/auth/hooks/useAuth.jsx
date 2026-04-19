import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginAction, registerAction } from "../state/authSlice";
import useToast from "../../../shared/hooks/useToast";
import { nanoid } from "nanoid";

const useAuth = (reset) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registeredUsers } = useSelector((store) => store.auth);

  const { errorToast, successToast } = useToast();

  const handleSignup = (data) => {
    if (data.password !== data.confirm) {
      errorToast("Passwords doesn't match");
      return;
    }
    const cleanData = { username: data.username, email: data.email, password: data.password, id: nanoid() };
    dispatch(registerAction(cleanData));
    successToast("Account Created Successfully");
    reset();
    navigate("/");
    return;
  };

  const handleLogin = (data) => {
    const user = registeredUsers.find((elem) => elem.email === data.email && elem.password === data.password);
    if (!user) {
      errorToast("Incurrect username or password");
      return;
    }
    dispatch(loginAction(user));
    successToast("Login Success");
    reset();
    navigate("/");
    return;
  };

  return { navigate, handleSignup, handleLogin };
};

export default useAuth;
