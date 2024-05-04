import classes from "./NewPost.module.css";

export default function NewPost({ setModelIsVisible, submitData, inputHandler, name, text }) {
  return (
    <form onSubmit={(event) => submitData(event)}>
      <div className={classes.formCancelButtonDiv}>
        <button className={classes.formCancelButton} onClick={() => {setModelIsVisible(false)}}>x</button>
      </div>
      <div className={classes.textDiv}>
        <label>Text</label>
        <textarea
          type="text"
          name="text"
          onChange={(event) => {
            inputHandler(event);
          }}
          value={text}
        />
      </div>
      <div className={classes.nameDiv}>
        <label>Your name</label>
        <input
          type="text"
          name="name"
          onChange={(event) => {
            inputHandler(event);
          }}
          value={name}
        />
      </div>

      <button type="submit" onClick={(event) => submitData(event)}>
        Add
      </button>
    </form>
  );
}
