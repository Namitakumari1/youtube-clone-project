import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import VideoPage from "./Pages/VideoPage";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import ChannelPage from "./Pages/ChannelPage";
import Signup from "./Pages/Signup";

// Common layout component for all pages
function Layout() {
  // State for search input from navbar
  const [search, setSearch] = useState("");

  // State to control sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Common navbar for all pages */}
      <Navbar setSearch={setSearch} setIsOpen={setIsOpen} />

      <div className="main-layout">
        {/* Common sidebar for all pages */}
        <Sidebar isOpen={isOpen} />

        {/* Render child routes inside outlet */}
        <div className="content" style={{ marginLeft: isOpen ? "200px" : "0px" }}>
          <Outlet context={{ search }} />
        </div>
      </div>
    </>
  );
}

// Application routing configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // Default home page route
        index: true,
        element: <Home />,
      },
      {
        // Dynamic route for individual video page
        path: "video/:id",   
        element: <VideoPage />,
      },
      {
        // Login page route
        path: "login",
        element: <Login />
      },
      {
        // Signup page route
        path: "signup",
        element: <Signup />
      },
      {
        // User channel page route
        path: "channel",
        element: <ChannelPage />
      }  
    ],
  },
]);

function App() {
  // Provide router configuration to entire application
  return <RouterProvider router={router} />;
}

export default App;