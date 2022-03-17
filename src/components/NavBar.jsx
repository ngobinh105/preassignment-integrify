import React from 'react'

const NavBar = ({ text, setText }) => {
  return (
    <div className='NavBar'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          className='input-container'
          type='text'
          placeholder='Search by city or state...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className='search-button'>Search Brewery</button>
      </form>
    </div>
  )
}

export default NavBar
