import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Time from "./Time.tsx";
import MyName from "./MyName.tsx";
import Counter from "./Counter.tsx";
import Form from "./Form.tsx";
import List from "./List.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/time", element: <Time /> },
  { path: "/name/:fname/:lname", element: <MyName /> },
  { path: "/counter", element: <Counter /> },
  { path: "/form", element: <Form /> },
  { path: "/list", element: <List /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
