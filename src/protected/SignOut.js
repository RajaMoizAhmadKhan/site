import React from "react";
import { Navigate } from "react-router-dom";
import {
  useCreateAuthDispatchContext,
  useCreateAuthStateContext,
} from "../contexApi/authContex";

function SignOut() {
  const handleAuthChange = useCreateAuthDispatchContext();

  handleAuthChange(false);
  return <Navigate to="/" />;
}

export default SignOut;
