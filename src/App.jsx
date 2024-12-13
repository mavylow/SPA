import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import {
  albumLoader,
  albumsLoader,
  userLoader,
  usersLoader,
} from "./routes/loaders.js";
import Users from "./routes/Users.jsx";
import Albums from "./routes/Albums.jsx";
import User from "./routes/User.jsx";
import Layout from "./routes/Layout.jsx";
import Album from "./routes/Album.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Navigate to="users" replace />,
      },
      {
        path: "albums",
        element: <Albums />,
        loader: albumsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "users",
        element: <Users />,
        loader: usersLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "users/:userId",
        element: <User />,
        loader: userLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "albums/:id",
        element: <Album />,
        loader: albumLoader,
        errorElement: <ErrorPage />,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
