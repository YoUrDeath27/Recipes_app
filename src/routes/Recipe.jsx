import React, { useEffect } from 'react'
import { useLocation  } from 'react-router-dom';
import Recipes from './Recipes';

const Recipe = () => {

  const location = useLocation();
  const currentUrl = location.pathname;
  const recipeNr = parseInt(currentUrl.slice(1)) - 1;
  const recipe = Recipes[recipeNr] ;

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (

    <main className='recipePage'>

        <button onClick={handleGoBack}>Go back to Recipe List</button>

        <div className="name"> {recipe.name} </div>
        <br />
        <div className='text'>INGREDIENTS</div>
        <ul className="ingredients">
          {recipe.ingredients.map( ingredient => (
            <li>{ingredient.name + ': ' + ingredient.quantity}</li>
          ))}
        </ul>
        <div className='text'>STEPS</div>
        <ul className="steps" >
          {recipe.steps.map( step => (
            <li>{step}</li>
          ))}
        </ul>
        <img src={recipe.image} alt={recipe.alt} />
    </main>
  )
}

export default Recipe