import React from "react";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import { signOut } from "firebase/auth";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";
import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Verified } from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonOffIcon from '@mui/icons-material/PersonOff';

const Home = ({ setIsAuth, isAuth }) => {
  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log(auth.currentUser);

      //navigate("/posts");
    });
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      //window.location.pathname = "/";
    });
  };

  return (
    <div className="navbar">
      <div className="page-heading">
        <h1 className="nav-head">MiniMemoirs</h1>
      </div>

      <div className="log-menu">
        <div className="log-button">
          {isAuth ? (
            <button className="rect-button " id="signout-btn" onClick={signUserOut}>
              Signout
            </button>
          ) : (
            <button className="rect-button " id="login-btn" onClick={googleSignIn}>
              <div className="google">
                <p>
                  
              Login in with Google
                </p>
              <GoogleIcon style={{marginBottom:"2px"}}></GoogleIcon>
              </div>
              
            </button>
          )}
        </div>

        <div className="user">
          <div className="user-details">
            <h5>
              {isAuth ? auth.currentUser.displayName : "User Not signed in"}
            </h5>
            <h6>{isAuth ? auth.currentUser.email : "Login to continue !!! "}</h6>
           
            
          </div>

          <div>
         
            <Avatar
              alt="!"
              src={isAuth ? auth.currentUser.photoURL : <p>no pic</p>}
              sx={{ width: 56, height: 56 }}
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
