import React from 'react'
import "../App.css";

const Card = (props) => {
    return (
        <div className='card flex flex-col border border-black text-white'>
            <div className='userid'>userid: {props.userid}</div>
            <div className='id'>id: {props.id}</div>
            <div className='title'>title: {props.title}</div>
        </div>
    )
}

export default Card;
