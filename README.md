# useGif – Custom React Hook for Fetching Random GIFs

A **clean, reusable React custom hook** demonstrating how to encapsulate API calls and state management to fetch random GIFs using the Giphy API.

This project showcases **my understanding of creating, using, and structuring React custom hooks** in a practical, real-world scenario.

---

## 🚀 What This Hook Does

* Fetches a random GIF from the Giphy API, optionally using a tag keyword.
* Manages **loading states** cleanly.
* Provides a simple API (`gif`, `loading`, `fetchGif`) to drop directly into any React component.
* Keeps your components **clean and declarative** by extracting logic into a reusable hook.

---

## 🛠️ Installation

Clone or download this repo, then install dependencies:

```bash
npm install axios
```

Copy `useGif.js` into your project’s `hooks` folder.

---

## ⚡ Usage Example

```jsx
import React from "react";
import useGif from "./useGif";

function RandomGif() {
  const { gif, loading, fetchGif } = useGif("funny cats");

  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={gif} alt="Random Gif" />}
      <button onClick={() => fetchGif()}>Get New GIF</button>
    </div>
  );
}

export default RandomGif;
```

---

## 📦 API Reference

### `useGif(tag?: string)`

| Parameter | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| tag       | string | (Optional) Keyword to search for a specific GIF. |

**Returns:**

* `gif`: URL of the fetched GIF.
* `loading`: Boolean indicating if a GIF is being fetched.
* `fetchGif`: Function to manually fetch a new GIF (can pass a new tag if needed).

---

## 🌐 Giphy API Key

The hook currently uses a test Giphy API key. For production use:

1️⃣ Create a `.env` file in your project:

```
REACT_APP_GIPHY_API_KEY=your_api_key_here
```

2️⃣ Update your `useGif.js` to use:

```js
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
```

---

## ✍️ Why I Built This

I built `useGif` as part of my **learning and demonstration of building custom hooks in React**:

* To show how to abstract logic away from UI components.
* To improve code reusability across components.
* To demonstrate clear understanding of **React hooks, API consumption, and state management patterns** in React projects.

---

## 🤝 Contributions

This repo is primarily for demonstration, but contributions to improve error handling, caching, or adding advanced examples are welcome!
