import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
