import React from 'react';

const Pagination = ({characterName, totalCharacters, charactersPerPage, setCurrentPage, currentPage, offset, setOffset, setIsLoading}) => {
  
  const offsetAmount = offset/20;
  const firstPage = 1 + offsetAmount;
  const lastPage = Math.ceil(totalCharacters/charactersPerPage)+ offsetAmount;
  
  let pages = [];
  for(let i=firstPage; i<= lastPage; i++){
    pages.push(i);
  }

  //handles when the previous button is clicked
  const handlePrev = () =>{
    //minimum offset = 0
    if(!(offset<100)){
      setIsLoading(true);
      setOffset(offset-100);
      setCurrentPage(1);
    }
  } 

  //handles when the next button is clicked
  const handleNext = () =>{
    //maximum offset = 1500
    if(!(offset>1400)){
      setIsLoading(true);
      setOffset(offset+100);
      setCurrentPage(1);
    }
  }
  
    return (
    characterName? <></>:
    <div className='pagination'>
        <a 
          href='#' 
          onClick={handlePrev} 
          className={offset<100?'page-number prev disabled':'page-number prev'} 
        >&lt;</a>
        
        {pages.map((page, index) => {
            return <a
                      href='#' 
                      key={index}
                      onClick={() => setCurrentPage(page-offsetAmount)}
                      className= {(page-offsetAmount) == currentPage?'page-number active':'page-number'}
                    >{page}
                    </a>
        })}

        <a 
          href='#' 
          onClick={handleNext} 
          className={offset>1400?'page-number next disabled':'page-number next'}
        >&gt;</a>
    </div>
  ) 
}

export default Pagination