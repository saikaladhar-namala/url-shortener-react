
function ExpiredUrlPage({ originalUrl, onGoBack }) {
  return (
    <div className="container mt-5 text-center">
      <div
        className="card custom-card p-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-orange mb-4">URL Expired!</h2>
        <p className="text-white-50 mb-4">
          The short URL you clicked has expired and is no longer active.
        </p>
        {originalUrl && (
          <p className="text-white-50 mb-4">
            Original URL was:{" "}
            <a
              href={originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange fw-bold text-decoration-underline"
            >
              {originalUrl}
            </a>
          </p>
        )}
        <img
          src="https://placehold.co/400x200/FF5722/FFFFFF?text=URL+Expired"
          alt="Expired URL"
          className="img-fluid rounded-lg mb-4 mx-auto d-block"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <button className="btn btn-orange mt-3" onClick={onGoBack}>
          Go Back to Shortener
        </button>
      </div>
    </div>
  );
}

export default ExpiredUrlPage;
