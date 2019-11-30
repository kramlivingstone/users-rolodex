import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='userimg' src={`https://robohash.org/${props.user.id}/?set=set5&size=180x180`} />
        <h2>{props.user.name}</h2>
        <p>{props.user.email.toLowerCase()}</p>
    </div>
)