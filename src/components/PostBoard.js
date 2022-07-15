import React, { useEffect, useState, useCallback } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import "./Task.css";

function PostBoard() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = useCallback(async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [deletePost]);

  return (
    <div className="postBoard">
      {postLists.map((post, i) => {
        return (
          <div className="post" key={i}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  🗑
                </button>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.company}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default PostBoard;
