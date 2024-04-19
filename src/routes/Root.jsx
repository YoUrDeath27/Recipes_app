// Root.js
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import RecipesList from './RecipesList';
import Recipes from './Recipes';

const Root = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { value } = e.target.search;
    setSearchTerm(value);
  };

  // Filter recipes based on search term
  const filteredRecipes = Recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav>
        <Form onSubmit={handleSubmit}> {/* Handle form submission */}
          <input type="text" name='search' />
          <button type="submit">Search</button>
        </Form>
      </nav>
      <main>
        <RecipesList recipesData={filteredRecipes} /> {/* Pass filtered recipes */}
      </main>
    </>
  );
};

export default Root;
