import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [characterName, setCharacterName] = useState('');
  const [characterId, setCharacterId] = useState('');

  
  useEffect(() => {
    const fetchItems = async() =>{
      let result;
      
      characterId? 
      result = await axios(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=61de521cde88459a4e5f0ffc019e4d0f&hash=494fa41b13cb972d1eb803ec3edf121c`):
      result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=61de521cde88459a4e5f0ffc019e4d0f&hash=494fa41b13cb972d1eb803ec3edf121c`);
      setItems(result.data.data.results);
      setIsLoading(false);
    }
    
    fetchItems();
  },[characterId])
  
  useEffect(()=>{
    setCharacterId('')

    if(characterName){
      items.map( item => {
        if(item.name.toLowerCase() == characterName.toLowerCase()){
          setCharacterId(item.id)
        }
      })
    }
  },[characterName])

  return (
    <div className="container">
      <Header />
      <Search getCharacterName={(name) => setCharacterName(name)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
