import React from 'react'

import './App.css'

const Filters = ({ onChange }) => {

  return (
    <>
      <p>
        Search: <input type="text" name="query" onChange={onChange}/>
      </p>
      <p>
        Filter:
        <select name="filter" onChange={onChange}>
          <option value="">No filter</option>
          <option value="10">> 10</option>
          <option value="100">> 100</option>
          <option value="200">> 200</option>
        </select>
      </p>
    </>
  )
}

export default Filters
