import "./FilterButtons.css";

function FilterButtons({ setCategory }) {
  return (
    <div className="filters">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("React")}>React</button>
      <button onClick={() => setCategory("Node")}>Node</button>
      <button onClick={() => setCategory("MongoDB")}>MongoDB</button>
    </div>
  );
}

export default FilterButtons;