import "./Feed.css"
import React from 'react'
import Posts from "./Posts"
import CreatePost from "./CreatePost"



const Feed = ({isAuth,setIsAuth}) => {
  return (
    <div className="feed-wrapper">

      <Posts isAuth={isAuth} setIsAuth={setIsAuth}></Posts>
      <CreatePost isAuth={isAuth} setIsAuth={setIsAuth}></CreatePost>
    </div>
  )
}

export default Feed
