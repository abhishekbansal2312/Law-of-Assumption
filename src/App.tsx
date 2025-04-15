import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HomePage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
