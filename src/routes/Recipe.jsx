import React from 'react'

const Recipe = ({recipe}) => {
  return (
    <>
        <li>
            <section className='name'> {recipe.name}</section> <br />
            <img src={recipe.image} alt={recipe.name}  />
        </li>
        <br />
    </>
  )
}

export default Recipe