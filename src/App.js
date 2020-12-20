import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Loading from "./components/shared/Loading";
import Routes from "./Routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>{Routes}</Suspense>
      <Footer />
    </Router>
  );
}
