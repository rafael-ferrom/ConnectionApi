import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import Home from "./pages/HomePage/Home";

import AxiosPage from "./pages/AxiosPage/AxiosPage";
import Thunk from "./pages/ThunkPage/Thunk";
import Rtk from "./pages/RtkPage/Rtk";
import FetchPage from "./pages/FetchPage/FetchPage";


function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout></PageLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/Fetch",
        element: <FetchPage></FetchPage> ,
      },
      {
        path: "/Axios",
        element: <AxiosPage></AxiosPage>,
      },
      {
        path: "/Thunk",
        element: <Thunk></Thunk>,
      },
      {
        path: "/RTK",
        element: <Rtk></Rtk> ,
      },

    ],
  },
]);


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
