import React from 'react';
import { NavLink } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  return (
    <>
      <NavLink to={`/recipe/${recipe.top_name}`} className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : ""
      }>
        <li className='recipe'>
          <section className='name'> {recipe.name}</section> <br />
          <img src={recipe.image} alt={recipe.alt} />
        </li>
      </NavLink>
      <br />
    </>
  );
};

export default RecipeItem;