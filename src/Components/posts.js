import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../Redux/PostsSlice";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState();
  const [updatedDescription, setUpdatedDescription] = useState();
  const [validate, setValidate] = useState(false);

  const posts = useSelector((state) => state.posts.items);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="form">
        <input
          value={title}
          type="text"
          placeholder="Enter Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          type="text"
          placeholder="Enter Post Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            if (title !== "" && description !== "") {
              dispatch(addPost({ id: posts.length + 1, title, description }));
            }
            setTitle("");
            setDescription("");
          }}
        >
          Add Post
        </button>
      </div>
      <div className="posts">
        {posts.length > 0
          ? posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="left">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
                <div className="right">
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setId(post.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deletePost(post.id));
                    }}
                  >
                    Delete
                  </button>
                  <br />
                  {isEdit && id == post.id && (
                    <div
                      className="update"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Update Title"
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Update Describtion"
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                      />
                      <button
                        onClick={() => {
                          dispatch(
                            updatePost({
                              id: post.id,
                              title: updatedTitle,
                              description: updatedDescription,
                            })
                          );
                          setIsEdit(false);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          : "No Posts To Show"}
      </div>
    </div>
  );
};

export default Posts;
