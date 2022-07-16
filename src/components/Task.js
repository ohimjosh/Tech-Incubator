import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Link } from "react-router-dom";
import "./Task.css";

export default function Task() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      company,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Company:</label>
          <input
            placeholder="Company..."
            onChange={(event) => {
              setCompany(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          ></textarea>
        </div>
        <button onClick={createPost}> Submit Post</button>
        <button onClick={createPost}>
          <Link to="/">Cancel</Link>
        </button>
      </div>
    </div>
  );
}
