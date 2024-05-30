import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  return (
    <>
      <NavLink to={`/${recipe.id}`} className='link' >
        <Link to={`/${recipe.id}`} className='link'>
          <li className='recipe'>
            <section className='name'> {recipe.name}</section> <br />
            <img src={recipe.image} alt={recipe.alt} />
          </li>
        </Link> 
      </NavLink>
      <br />
    </>
  );
};

export default RecipeItem;