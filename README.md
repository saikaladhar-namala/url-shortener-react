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

App will run at: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots

You can embed images like this:

```md
![Screenshot](./screenshots/url-list.png)
```

> 💡 Place your `.png` files inside a `screenshots/` folder inside your project root.