<img width="1493" height="782" alt="url-expire" src="https://github.com/user-attachments/assets/bae71764-ec72-41e2-bf83-8308237e412f" />
<img width="1536" height="778" alt="short-url-demo" src="https://github.com/user-attachments/assets/6594fec0-16e0-47e8-a6b1-fa894842169d" />
# URL Shortener - React UI

This is the **frontend** for the URL Shortener Application built with React. It interacts with a Spring Boot backend to generate and manage short links.

## 🔗 Backend API Endpoint

- **Shorten URL**: `POST http://localhost:8919/shortly/api/v1/url/shorten`

  Request Body:
  ```json
  {
    "originalUrl": "https://www.zeptonow.com/"
  }
  ```

  Sample Response:
  ```json
  {
    "scode": "01",
    "sdesc": "Short URL generated successfully",
    "shortUrl": "http://localhost:8919/TWaeLGTD",
    "timestamp": "2025-07-10T12:29:00.896304600Z"
  }
  ```

## 🖥️ Features

- Create short URLs from long links.
- Auto-paste clipboard link.
- Copy shortened URL.
- Tracks click count.
- Shows expiration status.
- Custom expired URL page.

## 🛠️ How to Run

```bash
npm install
npm start
```

By default, the app will run on:

http://localhost:3000

If port 3000 is already in use, React will automatically ask to run on the next available port, such as:

http://localhost:3001
<img width="1508" height="806" alt="success-shortcode" src="https://github.com/user-attachments/assets/231b0682-5fa0-46d7-b530-75a6b8745cef" />
