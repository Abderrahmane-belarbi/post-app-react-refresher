import './Application.css';
import PostsList from './components/PostsList';

function Application() {
  return (
    <div className="container">
        <h1 className='header1'> Posts App</h1>
      <header className="app-header">
        <PostsList />
      </header>
    </div>
  );
}

export default Application;
