import React from "react";

function CategoryMenu({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
