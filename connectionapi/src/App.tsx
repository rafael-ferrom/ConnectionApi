import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import Home from "./pages/HomePage/Home";
import TryCatch from "./pages/TryCatchPage/TryCatch";
import AxiosPage from "./pages/AxiosPage/AxiosPage";
import Thunk from "./pages/ThunkPage/Thunk";
import Rtk from "./pages/RtkPage/Rtk";


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
        path: "/Home",
        element: <TryCatch></TryCatch> ,
      },
      {
        path: "/VacationStatus",
        element: <AxiosPage></AxiosPage>,
      },
      {
        path: "/AllInformations",
        element: <Thunk></Thunk>,
      },
      {
        path: "/UsersOnVacation",
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
