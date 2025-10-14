import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Category from "./pages/Category";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <box sx={{ minHeight: "80vh", mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </box>
      <Footer />
    </Router>
  );
}

export default App;
