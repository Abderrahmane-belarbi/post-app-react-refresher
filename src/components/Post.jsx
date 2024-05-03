import classes from './Post.module.css';

export default function Post({author, body}) {
    return <li className={classes.container}>
        <h1 className={classes.header1}> {author}</h1>
        <p className={classes.paragraph}>{body}</p>
    </li>
}