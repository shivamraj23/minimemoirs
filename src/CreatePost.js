import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import "./App.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const submitPost = async (e) => {
    await addDoc(postsCollectionRef, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
    e.preventDefault();
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="create-post-container">
      <div className="newpost-heading">

      <h4>Create new post</h4>
      <h6>Make sure you are logged in.</h6>
      </div>

      <div className="newpost-input-container">
        <div className="input-field-wrapper">
          <input type="text"  required
            className="custom-text-field"
            autoComplete="off"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}>

          </input>
           
          
        </div>
       
        
        <div className="input-field-wrapper">
          <textarea className="custom-text-field" placeholder="Your content here" name="content-text" rows={5} onChange={(event) => setContent(event.target.value)}></textarea>
          
        </div>
        
      </div>

      <button class="rect-button newpost-button" onClick={submitPost}>
        Post
      </button>
    </div>
  );
};

export default CreatePost;
