import React, { Component } from 'react'

const SearchField = props =>{

  const handleChange = event => {
      props.setQuery(event.target.value)
  }
   
  return(
      <div>
          <input 
              type="text"
              name="query"
              value={ props.query}
              onChange= { handleChange }
          />
         <br/>
         <br/>
      </div>
      
  )
}

export default SearchField
