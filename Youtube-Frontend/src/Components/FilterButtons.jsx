import "./FilterButtons.css";

// Component to filter videos by selected category
function FilterButtons({ setCategory }) {
  return (
    <div className="filters">
      {/* Show all videos */}
      <button onClick={() => setCategory("All")}>All</button>

      {/* Filter React videos */}
      <button onClick={() => setCategory("React")}>React</button>

      {/* Filter Node.js videos */}
      <button onClick={() => setCategory("Node")}>Node</button>

      {/* Filter MongoDB videos */}
      <button onClick={() => setCategory("MongoDB")}>MongoDB</button>
    </div>
  );
}

export default FilterButtons;