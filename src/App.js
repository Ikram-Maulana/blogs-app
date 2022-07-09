import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="max-w-[640px] mx-auto bg-white min-h-screen dark:bg-slate-700 dark:text-slate-200">
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
    </div>
  );
};

export default App;
