import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contactpage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default AppRoutes;

