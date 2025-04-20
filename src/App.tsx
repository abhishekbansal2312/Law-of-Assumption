import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/AboutUs";
import Course from "./pages/Course";
import Coaching from "./pages/Coaching";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/course" element={<Course />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
