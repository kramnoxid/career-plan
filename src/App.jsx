import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage";
import NextSteps from "./pages/NextSteps";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan/:id" element={<PlanPage />} />
          <Route path="/next-steps" element={<NextSteps />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
