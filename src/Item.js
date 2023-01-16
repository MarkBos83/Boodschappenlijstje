import React from 'react';

const Item = (props) => {
    return(
        <div>
            <div className='item'>
                <span><input type='checkbox' className='done' onClick={() => props.Done(props.index)}></input></span>
                <span className="itemNameChange"><span className="itemName" onClick={()=>props.spanSwitch(props.index)}>{props.itemName}</span></span>
                <span> <img src={require('./img/delete-button.jpg')} className='remove' onClick={() => props.Removeitem(props.index)} /></span>
                <span className="date"> &emsp;&emsp; datum toegevoegd: {props.date}</span>
            </div>
        </div>
    )
}

export default Item;