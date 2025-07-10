import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center text-danger mt-5">
      <h2>404 - URL Not Found</h2>
      <p>The short link you tried does not exist.</p>
      
      <Link to="/">
        <button className="btn btn-warning mt-3">
          Go Back to URL Manager
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
