import React from "react";
import "./Userguide.css";

const Userguide = () => {
  return (
    <div className="footer">
      <div className="guide-container">
        <h3>MiniMemoirs-The Text Blogging site User Guide:</h3>

        <p>
          Log In: Sign in to your account. <br></br>Create Post: After logging
          in, create your own post by clicking the "Create Post" button.
          <br></br>Read Posts: Explore posts from other users on the dashboard.
          <br></br>Delete Posts: If logged in, you can delete your own posts as
          needed.
        </p>
        <h4><i>Enjoy your time on the Site!</i></h4>
      </div>
      <div className="contact-container">
        <h1>Shivam Raj</h1>
        <h3>shivamraj53.sr@gmail.com</h3>
      </div>
    </div>
  );
};

export default Userguide;
