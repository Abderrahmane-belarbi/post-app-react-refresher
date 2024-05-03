import classes from "./Model.module.css";

export default function Model({ children, modelOff }) {
  return (
    <>
      <div className={classes.backdrop} onClick={modelOff} />
      <dialog open className={classes.model}>
        {children}
      </dialog>
    </>
  );
}
