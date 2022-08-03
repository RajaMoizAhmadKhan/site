import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../contaxApi/authContex";

function CardProtected({ children }) {
  const isAuthenticated = useCreateAuthStateContext();

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default CardProtected;
