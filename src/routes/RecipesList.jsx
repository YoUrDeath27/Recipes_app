import React from 'react'
import RecipeItem from './RecipeItem'
import Search from './Search'; 
import Recipes from './Recipes';

const RecipesList = () => {
  return (
    <>
      <Search/>
      <main className='recipeList'>
        <ul>
            {Recipes.map(recipe => (
                <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
        </ul>
      </main>
    </>
  )
}

export default RecipesList