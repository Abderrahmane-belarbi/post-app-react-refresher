import { useEffect, useState } from "react";
import "./Application.css";
import NewPost from "./components/NewPost";
import PostsList from "./components/PostsList";
import Model from "./components/Model";

function Application() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [postList, setPostList] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  let currentPost = {};

  useEffect(() => {
    async function fetchPosts() {
      setIsDataLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPostList(resData.posts);
      setIsDataLoading(false);
    }
    fetchPosts();
  }, []);

  function submitData(event) {
    event.preventDefault();

    if (name.length !== 0 && text.length !== 0) {
      currentPost = { name: name, text: text };
      setPostList([currentPost, ...postList]);
      setName("");
      setText("");
    } else return;

    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(currentPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setModelIsVisible(false);
  }

  function inputHandler(event) {
    if (event.target.name === "text") {
      setText(event.target.value);
    } else if (event.target.name === "name") {
      setName(event.target.value);
    }
  }

  function modelOff() {
    setModelIsVisible(false);
  }
  function modelOn() {
    setModelIsVisible(true);
  }

  return (
    <div className="container">
      <h1 className="header1">Posts App</h1>
      <div className="buttonDiv">
        <button onClick={modelOn}>Add New Post</button>
      </div>
      {modelIsVisible && (
        <Model modelOff={modelOff}>
          <NewPost
            setModelIsVisible={setModelIsVisible}
            inputHandler={inputHandler}
            submitData={submitData}
            name={name}
            text={text}
          />
        </Model>
      )}
      {!isDataLoading && postList.length > 0 && (
        <PostsList postList={postList} />
      )}
      {!isDataLoading && postList.length <= 0 && (
        <h1 className="noposts">That is no Posts</h1>
      )}
      {isDataLoading && <h1 className="noposts">Loading Posts...</h1>}
    </div>
  );
}

export default Application;
