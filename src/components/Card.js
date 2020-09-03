 import React from 'react'
 import './Card.css';

 function Card({item}) {
     return (
         <div className="card">
             <h2>Name: {item.name} </h2>
             <p>Email: {item.email} </p>
         </div>
     )
 }
 
 export default Card;
 


