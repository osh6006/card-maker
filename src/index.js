import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Firebase from "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
const firebase = new Firebase(
  process.env.REACT_APP_FIREBASE_API_KEY,
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  process.env.REACT_APP_FIREBASE_DATABASE_URL,
  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  process.env.REACT_APP_FIREBASE_APP_ID,
  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login firebase={firebase} />}></Route>
      <Route path="/app" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
