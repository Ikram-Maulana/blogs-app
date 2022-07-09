import React from "react";
import { Route, Routes } from "react-router-dom";
import FooterApp from "./components/FooterApp";
import NavbarApp from "./components/NavbarApp";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="mx-auto grid grid-rows-[auto_1fr_auto] bg-white min-h-screen dark:bg-slate-700 dark:text-slate-200">
      <header>
        <NavbarApp />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterApp />
    </div>
  );
};

export default App;
