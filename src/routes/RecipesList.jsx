import React from 'react'
import Recipe from './RecipeItem'

const RecipesList = ({recipesData}) => {
  return (
    <ul>
        {recipesData.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
        ))}
    </ul>
  )
}

export default RecipesList