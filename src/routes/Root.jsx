// Root.js
import React, { useEffect } from 'react';
import { 
  Outlet,} from 'react-router-dom';
import Recipes from './Recipes';

const Root = () => {
  
  return (
    <>
        <Outlet/> 
        {/* /\ this is where the children will load */}
    </>
  );
};

export default Root;
