import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Loading from "./components/Loading";
import "./css/Loading.css";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function AppWrapper() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      <App />
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
