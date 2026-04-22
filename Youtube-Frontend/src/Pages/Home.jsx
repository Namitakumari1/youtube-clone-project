import { useEffect, useState } from "react";
import { getVideos } from "../API/video.api.js";
import VideoCard from "../Components/VideoCard";
import FilterButtons from "../Components/FilterButtons";
import { useOutletContext } from "react-router-dom";
import "./Home.css";

function Home() {
  // Store all videos fetched from backend
  const [videos, setVideos] = useState([]);

  // Store selected category from filter buttons
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get search text from Navbar using Outlet context
  const { search } = useOutletContext();

  // Fetch all videos from backend on component load
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Filter videos based on selected category and search input
  const filteredVideos = videos.filter((video) => {
    const categoryMatch =
      selectedCategory === "All" ||
      video.category === selectedCategory;

    const searchMatch =
      !search ||
      video.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="home">

      {/* Category filter buttons */}
      <FilterButtons
        setCategory={setSelectedCategory}
      />

      {/* Video cards grid */}
      <div className="video-grid">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard
              key={video._id}
              video={video}
            />
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
}

export default Home;