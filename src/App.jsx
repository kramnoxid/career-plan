import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan/:id" element={<PlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}
