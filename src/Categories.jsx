const Categories = ({ categoryArray, filterItems }) => {
  return (
    <div className="btn-container">
      {categoryArray.map((category) => {
        return (
          <button
            key={category}
            type="button"
            className="btn"
            onClick={() => {
              filterItems({ category });
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
