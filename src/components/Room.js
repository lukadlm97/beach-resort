import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import defualtImg from '../images/room-1.jpeg'
import { memo } from "react";


const Room = memo(({room})=> {
    const {name,slug,images,price} = room

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defualtImg} alt="single room"/>
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`} 
            className="btn-primary room-link">
                Features
            </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
})

Room.PropTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string)
        .isRequired,
        price:PropTypes.number.isRequired
    })
};

export default Room;