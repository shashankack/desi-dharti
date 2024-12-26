import React from "react";
import Pages from "./components/Pages";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import BlogPage from "./components/Blog/BlogPage";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
