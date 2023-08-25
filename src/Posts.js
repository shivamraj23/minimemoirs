import React from "react";
import "./Posts.css";
import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase-config";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InfoIcon from "@mui/icons-material/Info";

const Posts = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [refresh]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setRefresh(refresh + 1);
  };

  return (
    <div className="post">
      {postLists.map((post) => {
        return (
          <div className="posts-container">
            <div className="content-area">
              <h6>{post.title}</h6>
              <p className="content-pre">{post.content}</p>
              <div className="publisher-details">
                <p>
                  Publisher:<strong>{post.author.name}</strong>{" "}
                </p>
              </div>
            </div>
            <div className="icons">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <DeleteOutlineOutlinedIcon
                  onClick={() => {
                    deletePost(post.id);
                  }}
                ></DeleteOutlineOutlinedIcon>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
