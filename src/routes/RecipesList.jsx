import React, { useState} from 'react'
import { Form } from 'react-router-dom';
import RecipeItem from './RecipeItem'
import Recipes from './Recipes';

const RecipesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    console.log(searchTerm)
  };
  
  // Filter recipes based on search term
  const filteredRecipes = Recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
      
  return (
    <>
      <Form className='form'>
        <input type="text" name='search' onChange={handleChange} />
      </Form>

      <main className='recipeList'>
        
        <ul>
            {filteredRecipes.map(recipe => (
                <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
        </ul>
      </main>
    </>
  )
}

export default RecipesList