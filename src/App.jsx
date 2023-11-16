import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
          path: "/blogs",
          element: (
            <PrivateRoute>
              <Blogs></Blogs>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
