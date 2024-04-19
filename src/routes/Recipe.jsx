import React from 'react'

const Recipe = ({recipe}) => {
  return (
    <>
        <li className='recipe'>
            <section className='name'> {recipe.name}</section> <br />
            <img src={recipe.image} alt={recipe.alt}  />
        </li>
        <br />
    </>
  )
}

export default Recipe