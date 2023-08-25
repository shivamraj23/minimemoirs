import "./Feed.css";
import React from "react";
import Posts from "./Posts";
import "./App.css";
import "./Posts.css";
import { Link } from "react-router-dom";


const NewPostFeed = ({ isAuth, setIsAuth }) => {
  return (
    <div className="feed-wrapper">
      <Posts isAuth={isAuth} setIsAuth={setIsAuth}></Posts>

      <Link
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        to="/newpost"
        className="newpost-link newpost-btn"
        underline="none"
      > CREATE POST
      </Link>
    </div>
  );
};

export default NewPostFeed;
