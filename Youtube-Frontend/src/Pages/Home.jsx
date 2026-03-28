import { useEffect, useState } from "react";
import { getVideos } from "../API/video.api.js";
import VideoCard from "../Components/VideoCard";
import FilterButtons from "../Components/FilterButtons";
import { useOutletContext } from "react-router-dom";
import "./Home.css";

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { search } = useOutletContext();

  // Fetch all videos from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data.videos || []);
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Filter videos by category and search
  const filteredVideos = videos.filter((video) => {
    const categoryMatch = selectedCategory === "All" || video.category === selectedCategory;
    const searchMatch = !search || video.title.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="home">
      {/* Filter Buttons */}
      <FilterButtons setCategory={setSelectedCategory} />

      {/* Videos Grid */}
      <div className="video-grid">
        {filteredVideos.length > 0 ? (filteredVideos.map((video) => 
          (<VideoCard key={video._id} video={video} /> ))) : 
          (<p>No videos found</p>
        )}
      </div>
    </div>
  );
}
export default Home;