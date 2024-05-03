import { useState } from "react";
import "./Application.css";
import NewPost from "./components/NewPost";
import PostsList from "./components/PostsList";
import Model from "./components/Model";

function Application() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [postList, setPostList] = useState([]);

  function submitData(event) {
    event.preventDefault();
    if (name.length !== 0 && text.length !== 0) {
      setPostList([{ name: name, text: text }, ...postList]);
      setName("");
      setText("");
    }
    console.log(postList);
  }

  function inputHandler(event) {
    if (event.target.name === "text") {
      setText(event.target.value);
    } else if (event.target.name === "name") {
      setName(event.target.value);
    }
  }

  return (
    <div className="container">
      <h1 className="header1">Posts App</h1>
      <header className="app-header">
        <Model>
          <NewPost
            inputHandler={inputHandler}
            submitData={submitData}
            name={name}
            text={text}
          />
        </Model>
        <PostsList postList={postList} />
      </header>
    </div>
  );
}

export default Application;
