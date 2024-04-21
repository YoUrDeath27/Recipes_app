import React, { useState } from 'react';
import { Form,  } from 'react-router-dom'
import Recipes from './Recipes';

const Search = () => {
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
        <Form className='form'>
          <input type="text" name='search' onChange={handleChange} />
        </Form>
    );
};

export default Search;
