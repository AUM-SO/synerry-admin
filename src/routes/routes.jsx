import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/LayoutPage";
import NoPage from "../pages/NoPage";
import BackOffice from "../pages/BackOffice";

const routers = createBrowserRouter([
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/backoffice",
    element: <BackOffice />,
  },
]);

export default routers;
