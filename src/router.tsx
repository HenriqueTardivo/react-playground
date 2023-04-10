import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalendarioPage, IndicePage } from "./pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndicePage />} />
        <Route path="/calendario" element={<CalendarioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
