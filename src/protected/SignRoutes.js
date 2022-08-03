import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../contaxApi/authContex";

function SignRoutes({ children }) {
  const isAuthenticated = useCreateAuthStateContext();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

export default SignRoutes;
