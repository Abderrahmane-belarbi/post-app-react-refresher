import { useState } from "react";
import "./Application.css";
import NewPost from "./components/NewPost";
import PostsList from "./components/PostsList";
import Model from "./components/Model";

function Application() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [postList, setPostList] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function submitData(event) {
    event.preventDefault();
    if (name.length !== 0 && text.length !== 0) {
      setPostList([{ name: name, text: text }, ...postList]);
      setName("");
      setText("");
    }

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
              inputHandler={inputHandler}
              submitData={submitData}
              name={name}
              text={text}
            />
          </Model>
        )}
        {postList.length > 0 ? (
        <PostsList postList={postList} />

        ) : (
          <h1 className="noposts">That is no Posts</h1>
        )}
    </div>
  );
}

export default Application;
