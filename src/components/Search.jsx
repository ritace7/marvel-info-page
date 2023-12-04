import React, {useState} from 'react'

const Search = ({getCharacterName}) => {
  const [text, setText] = useState('');
  
  const handleChange = (t)=>{
    setText(t);
    getCharacterName(t);
  }

  return (
    <section className="search">
        <form>
            <input 
                type='text'
                className='form-control'
                placeholder='Search Characters'
                value={text}
                onChange={(e) => handleChange(e.target.value)}
                autoFocus
            />
        </form>
    </section>
  )
}

export default Search
