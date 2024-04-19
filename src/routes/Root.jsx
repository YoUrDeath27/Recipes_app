import { Form } from "react-router-dom";
import { useState } from "react";
import RecipesList from './RecipesList';
import Recipes from "./Recipes";

const Root = () => {
  const [datas, setDatas] = useState('');

  const handleSubmit = (e) => {
    const value = e.target.value;
    
    setDatas(value);
    console.log(datas + ' data');
  };

  return (
    <>
    <nav>
      <Form> 
        <input type="text" name='search' onChange={handleSubmit}/>
      </Form>
    </nav>
    <main>
      <RecipesList recipesData={Recipes} />
      {/* using this make the searching recipes part */}
    </main>
    </>
  );
};

export default Root;