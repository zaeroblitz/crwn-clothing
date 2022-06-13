import React from "react";
import "./CategoryDirectory.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
