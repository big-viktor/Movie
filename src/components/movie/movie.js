/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './movie.css';

function Movie(propss) {
  const url_img = 'https://image.tmdb.org/t/p/w500/';
  const [ite, setIte] = useState([]);
  const [itez, addItez] = useState(true);

  if(itez){
    return (
      <div className="container">
       {propss.items.map(item => (
         <div key={item.title}>
           <div>
             <button className="button-photo"  onClick={()=>{setIte(item);addItez(false)}}>
               <img className="photo" src={url_img + item.poster_path} />
             </button>
           </div>
           <div className="text-title">
           {item.original_title}
           </div>
         </div>
       ))}
      </div>
   );
  }else{
    return(
      <>
      <div className="container-content">
      <button className="buttton-back" onClick={()=>{addItez(true)}}><i class="arrow left"></i></button>
        <div className="container-revers">
          <div>
          <img className="photo-revers" src={url_img + ite.poster_path} />
          </div>
          <div className="content-text-revers">
            <div>
              <div className="text-title-revers">
              {ite.original_title}
              </div>
              <p className="text-title-revers">
              {ite.release_date}
              </p>
            </div>
          </div>
            <div className="text-title-revers2">
              {ite.overview}
            </div>
          </div>
        </div>
     </>
   )
  }
}
  

export default Movie;