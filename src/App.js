import React from "react";
import "./App.css";
import Home from "./Home";
import Cart from "./Cart";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import CardProtected from "./protected/CardProtected";
import SignRoutes from "./protected/SignRoutes";
function App() {
  return (
    <div className="NavBar-app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <CardProtected>
              <Cart />
            </CardProtected>
          }
        />
        <Route
          path="/signin"
          element={
            <SignRoutes>
              <Signin />
            </SignRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
