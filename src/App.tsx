import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Dashboard, LoginPage, SingleDashboard } from "./pages";

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
