import React from 'react'

function Card({ data }) {
    return (
        <div className="card">
            <h1> {data.title} </h1>
             <img src={data.url} alt={data.title}/>
        </div>
    )
}

export default Card;
