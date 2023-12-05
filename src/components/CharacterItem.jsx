const CharacterItem = ({item}) => {
    return (          
         <div className='card'>
         <div className='card-inner'>
           <div className='card-front'>
           <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}  alt="card cover"/>
           </div>
           <div className='card-back'>
             <h1> {item.name}</h1>
             <ul>
               <li>
                 <strong>Comic Appearances: </strong> {item.comics.available}
               </li>
               <li>
                 <strong>Stories: </strong> {item.stories.available}
               </li>
               <li>
                 <strong>Appeared In: </strong> {item.comics.available?item.comics.items[0].name:<>Information not available</>}
               </li>
               {item.description?
                <li>
                  <strong>Description:</strong> {item.description.substring(0, 80)}.. 
                </li>:<></>}
              {console.log(item)}
               <li>
                 <a href={item.urls[2]?item.urls[2].url:"https://www.marvel.com/articles#promo-4"} 
                    target="_blank" 
                    rel="noreferrer"
                 >Click here for more info..</a> 
               </li>
             </ul>
           </div>
         </div>
       </div>
    );
}
 
export default CharacterItem;