import React, {useState} from 'react'

const Search = ({name, setName}) => {  

  const handleSubmit = (event) =>{
    event.preventDefault();
  }

  return (
    <section className="search">
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                className='form-control'
                placeholder='Search Characters'
                value={name}
                onChange={(e) => setName(e.target.value)}
                onSubmit={handleSubmit}
                autoFocus
            />
        </form>
    </section>
  )
}

export default Search
