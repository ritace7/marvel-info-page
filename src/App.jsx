import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);     //store the data returned from the API
  const [isLoading, setIsLoading] = useState(true); //if still loading, render the loading gif
  const [characterName, setCharacterName] = useState(''); //store character name from user input
  const [currentPage, setCurrentPage] = useState(1);  //page we're on, 1-5
  const [offset, setOffset] = useState(0);  //offset for the API, 0-1400
  
  const charactersPerPage = 20;
  const lastCharacterIndex = currentPage * charactersPerPage;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;

  useEffect(() => {
    const fetchItems = async() =>{
      let result;
      
      //if user types something, request a different api endpoint
      characterName?
      result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=61de521cde88459a4e5f0ffc019e4d0f&hash=494fa41b13cb972d1eb803ec3edf121c&nameStartsWith=${characterName}`):
      result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=61de521cde88459a4e5f0ffc019e4d0f&hash=494fa41b13cb972d1eb803ec3edf121c&limit=100&offset=${offset}`);
       
      setItems(result.data.data.results);
      setIsLoading(false);
    }
    
    fetchItems();

  },[offset, characterName])
  
  return (
    <div className="container">
      <Header />
      <Search name={characterName} setName={setCharacterName}/>
      <CharacterGrid 
        isLoading={isLoading} 
        items={items.slice(firstCharacterIndex, lastCharacterIndex)}
      />

      <Pagination 
        characterName = {characterName}
        totalCharacters = {items.length}
        charactersPerPage = {charactersPerPage} 
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
        offset = {offset}
        setOffset = {setOffset}
        setIsLoading = {setIsLoading}
      />
      <Footer />
    </div>
  )
}

export default App
