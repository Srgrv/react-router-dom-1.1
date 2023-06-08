import React from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

//styles
import "./styles/App.css";

//pages
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Notfound from "./pages/NotfoundPage";
import TitlePage from "./pages/TitlePage";

//components
import Layout from "./components/Layout";

//extra-reducers
import { getPostsAsync } from "./store/sliceBlog/sliceBlog";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<TitlePage />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default App;
