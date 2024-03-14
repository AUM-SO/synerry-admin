import { RouterProvider } from "react-router-dom";
import routers from "./routes/routes";

import "./App.css";

export const App = () => {
  return <RouterProvider router={routers} />;
};
