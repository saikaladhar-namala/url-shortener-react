import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ExpiredUrlPage from "./ExpiredUrlPage";

function UrlManager() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [autoPaste, setAutoPaste] = useState(false);
  const [showExpiredPage, setShowExpiredPage] = useState(false);
  const [clickedExpiredUrl, setClickedExpiredUrl] = useState(null);

  const API_BASE_URL = "http://localhost:8919/api/v1/url";
  const REDIRECT_BASE_URL = "http://localhost:8919";

  const fetchAllUrls = async () => {
    try {

      const response = await axios.get(`${API_BASE_URL}/all`);
      const data = response.data;

      const fetchedUrls = data.map((url) => ({
        originalUrl: url.originalUrl,
        shortUrl: `${REDIRECT_BASE_URL}/${url.shortCode}`,
        clicks: url.hitCount,
        date: new Date(url.creationTime).toLocaleString(),
        isExpired: url.expired,
      }));
      setShortenedUrls(fetchedUrls);
    } catch (error) {
      console.error("Error fetching URLs:", error);

    }
  };


  useEffect(() => {

    fetchAllUrls();

  }, []);



  const formik = useFormik({
    initialValues: {
      originalUrl: "",
    },
    validationSchema: Yup.object({
      originalUrl: Yup.string()
        .url("Invalid URL format")
        .required("URL is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/shorten`, {
          originalUrl: values.originalUrl,
        });
        const data = response.data;

        setMessage({ type: "success", text: data.sdesc });
        fetchAllUrls();
        resetForm();
      } catch (error) {
        console.error("Error shortening URL:", error);
        if (error.response) {
          setMessage({
            type: "error",
            text: error.response.data.sdesc,
          });
        } else {
          setMessage({
            type: "error",
            text: "Network error or server unreachable.",
          });
        }
      }
    },
  });

  const handleAutoPaste = async (e) => {
    setAutoPaste(e.target.checked);
    if (e.target.checked) {
      try {
        const text = await navigator.clipboard.readText();
        formik.setFieldValue("originalUrl", text);
      } catch (err) {
        console.error("Failed to read clipboard contents: ", err);
        alert(
          "Clipboard access denied or not supported in this context. Please paste manually."
        );
      }
    }
  };





  const handleShortUrlClick = (event, url) => {
    if (url.isExpired) {
      event.preventDefault();
      setShowExpiredPage(true);
      setClickedExpiredUrl(url.originalUrl);
    } else {
      fetchAllUrls();
    }
  };

  const handleGoBack = () => {
    setShowExpiredPage(false);
    setClickedExpiredUrl(null);
    fetchAllUrls();
  };

  return (
    <>

      {message.text && (
        <div
          className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"
            } fade show`}
          role="alert"
        >
          {message.text}
        </div>
      )}

      {showExpiredPage ? (
        <ExpiredUrlPage
          originalUrl={clickedExpiredUrl}
          onGoBack={handleGoBack}
        />
      ) : (

        <>

          <div className="row justify-content-center mb-5">
            <div className="col-md-8 col-lg-6">
              <div className="card custom-card p-4">
                <form onSubmit={formik.handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className={`form-control custom-input ${formik.touched.originalUrl && formik.errors.originalUrl
                        ? "is-invalid"
                        : ""
                        }`}
                      placeholder="Enter the link here"
                      {...formik.getFieldProps("originalUrl")}
                    />
                    <button className="btn btn-orange" type="submit">
                      Shorten Now!
                    </button>
                    {formik.touched.originalUrl && formik.errors.originalUrl ? (
                      <div className="invalid-feedback d-block">
                        {formik.errors.originalUrl}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoPaste"
                      checked={autoPaste}
                      onChange={handleAutoPaste}
                    />
                    <label
                      className="form-check-label text-white-50"
                      htmlFor="autoPaste"
                    >
                      Auto Paste from Clipboard
                      <small className="ms-2 text-muted">
                        (requires browser permission)
                      </small>
                    </label>{" "}

                  </div>
                </form>
              </div>
            </div>
          </div>


          <div className="card custom-card p-4">
            <h3 className="text-orange mb-3">Your Shortened Links</h3>
            {shortenedUrls.length === 0 ? (
              <p className="text-white-50 text-center">
                No shortened links yet. Shorten one above!
              </p>
            ) : (
              <div className="table-responsive">
                <table className="table table-dark custom-table">
                  <thead>
                    <tr>
                      <th scope="col">Short Link</th>
                      <th scope="col">Original Link</th>
                      <th scope="col">Clicks</th>
                      <th scope="col">Created Date</th>
                      <th scope="col">Is Expired</th>

                    </tr>
                  </thead>
                  <tbody>
                    {shortenedUrls.map((url, index) => (
                      <tr key={index}>
                        <td>
                          <a
                            href={url.shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange"
                            onClick={(event) => handleShortUrlClick(event, url)}
                          >
                            {url.shortUrl}
                          </a>
                        </td>
                        <td>
                          <a
                            href={url.originalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white-50 original-link-text"
                          >
                            {url.originalUrl}
                          </a>
                        </td>
                        <td>{url.clicks}</td>
                        <td>{url.date}</td>
                        <td>{url.isExpired ? "Yes" : "No"}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default UrlManager;