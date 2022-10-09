import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Dashboard, LoginPage } from "./pages";
import React, { useState, Dispatch, SetStateAction } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
