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
                 <strong>Comic Appearances:</strong> {item.comics.available}
               </li>
               <li>
                 <strong>ID:</strong> {item.id}
               </li>
             </ul>
           </div>
         </div>
       </div>
    );
}
 
export default CharacterItem;