//packages
import { Outlet, NavLink } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="about">About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>💔</footer>
    </div>
  );
};

export default Layout;
