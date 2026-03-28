import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import VideoPage from "./Pages/VideoPage";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import ChannelPage from "./Pages/ChannelPage";

function Layout() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setSearch={setSearch} setIsOpen={setIsOpen} />

      <div className="main-layout">
        <Sidebar isOpen={isOpen} />

        <div className="content" style={{ marginLeft: isOpen ? "200px" : "0px" }}>
          <Outlet context={{ search }} />
        </div>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "video/:id",   
        element: <VideoPage />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "channel",
        element: <ChannelPage />
      }  
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;