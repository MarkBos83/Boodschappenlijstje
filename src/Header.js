import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='itemAmounts'>{props.bought}/{props.toBuy} gekocht</span>
        </header>
    )
}

export default Header;