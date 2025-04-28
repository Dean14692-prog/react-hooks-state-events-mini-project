import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoryButtons = categories.map((category) => {
    const isSelected = category === selectedCategory;

    return (
      <button
        key={category}
        className={`btn btn-outline-primary btn-sm m-1 ${
          isSelected ? "active" : ""
        }`}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="category-filter mt-3">
      <h5>Filter by Category</h5>
      <div className="d-flex flex-wrap">{categoryButtons}</div>
    </div>
  );
}

export default CategoryFilter;
