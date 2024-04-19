import React from 'react'
import RecipeItem from './RecipeItem'

const RecipesList = ({recipesData}) => {
  return (
    <ul>
        {recipesData.map(recipe => (
            <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
    </ul>
  )
}

export default RecipesList