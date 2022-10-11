import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Dashboard, LoginPage, SingleDashboard } from "./pages";
import React, { useState, Dispatch, SetStateAction } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/:singleDashboard"
          element={<SingleDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
