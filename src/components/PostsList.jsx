import Post from "./Post";
import classes from './PostsList.modules.css';

export default function PostsList() {
  return (
    <ul className={classes.container}>
      <Post
        author="Jone Doe"
        body="An Ex Web dev"
      />
      <Post
        author="Jone Doe"
        body="An Ex Web dev"
      />
      <Post
        author="Jone Doe"
        body="An Ex Web dev"
      />
      <Post
        author="Jone Doe"
        body="An Ex Web dev"
      />
    </ul>
  );
}
