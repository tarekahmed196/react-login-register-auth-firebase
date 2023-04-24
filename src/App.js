
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import Main from "./components/Layout/Main";
import LoginBootstrap from "./components/Login/LoginBootstrap";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap/>
      }
    ]
  }
])

function App() {
 
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
