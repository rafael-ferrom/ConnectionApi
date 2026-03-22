import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import Home from "./pages/HomePage/Home";

import AxiosPage from "./pages/AxiosPage/AxiosPage";
import Thunk from "./pages/ThunkPage/Thunk";
import Rtk from "./pages/RtkPage/Rtk";
import FetchPage from "./pages/FetchPage/FetchPage";
import { Provider } from "react-redux";
import { store } from "./store/store";


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
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
