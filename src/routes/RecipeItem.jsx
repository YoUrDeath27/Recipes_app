import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {

  const handleClick = () => {
    // Navigate to the details page for the selected recipe
    history.push(`/recipe/${recipe.top_name}`);
  };

  return (
    <>
      <NavLink to={`/recipes/${recipe.top_name}`} className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : ""
      }>
        <li className='recipe' onClick={handleClick}>
          <section className='name'> {recipe.name}</section> <br />
          <img src={recipe.image} alt={recipe.alt} />
        </li>
      </NavLink>
      <br />
    </>
  );
};

export default Recipe;