import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan/:id" element={<PlanPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
