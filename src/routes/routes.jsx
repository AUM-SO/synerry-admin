import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layoutPage";
import NoPage from "../pages/noPage";
import BackOffice from "../pages/backOffice";
import CounterSetion from "../components/counterSetion";
import ProfileDev from "../pages/profileDev";

const routers = createBrowserRouter([
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/",
    element: <Layout compon={<CounterSetion />} />,
  },
  {
    path: "/profile",
    element: <Layout compon={<ProfileDev />} />,
  },
  {
    path: "/backoffice",
    element: <Layout compon={<BackOffice />} />,
  },
]);

export default routers;
