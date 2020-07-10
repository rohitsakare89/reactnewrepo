import React from 'react';


function Card(props) {
    return (
               
               <div className='cards'>
                   <div className='card'>
                       <img src={props.imgsrc} alt='mypic' className='card__img' />
                       <div className='card__info'>
                       <span className='card__category'>{props.sname}</span>

                           <h1 className='card__title'>{props.tittle}</h1>
                             <br></br>
                               <a href={props.link} target='__blank'>
                                   <button>Watch Now </button>
                               </a>
                        </div>
                    </div>
                </div>
    );
}

export default Card;