import React from "react";
import { Link } from "react-router-dom";
import Posts from "./posts";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/admin/posts">Posts</Link>
        <Link to="/admin/users">Users</Link>
      </li>
    </ul>
  );
};

export default SideBar;
