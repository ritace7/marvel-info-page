import React from 'react';

const Pagination = ({totalCharacters, charactersPerPage, setCurrentPage, currentPage, offset, setOffset}) => {
  let pages = [];
  let firstPage = 1 + (offset/20);
  let lastPage = Math.ceil(totalCharacters/charactersPerPage)+ (offset/20);

  for(let i=firstPage; i<= lastPage; i++){
    pages.push(i);
  }

  const handleNext = () =>{
    setOffset(offset+100);
    setCurrentPage(firstPage);
  }
  
    return (
    <div className='pagination'>
        <a href='#' onClick={()=> setOffset(offset-100)} className='page-number prev'>&lt;</a>
        {pages.map((page, index) => {
            return <a
            href='#' 
            key={index}
            onClick={() => setCurrentPage(page-(offset/20))}
            className= {page == currentPage?'page-number active':'page-number'}
            >{page}</a>
        })}
        <a href='#' onClick={handleNext} className='page-number next'>&gt;</a>
    </div>
  )
}

export default Pagination