import Post from "./Post";
import classes from './PostsList.module.css';

export default function PostsList({postList}) {

  return (
    <ul className={classes.container}>
    {postList.map((post, id) => (
      <Post
        key={id}
        author={post.name}
        body={post.text}
      />
    ))}
    </ul>
  );
}
