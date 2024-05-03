import classes from "./Model.module.css";

export default function Model({ children }) {
  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.model}>
          {children}
        </dialog>
      </div>
    </>
  );
}
