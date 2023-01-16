import React from 'react';

class Addtask extends React.Component {
    render() {
        return (
            <div>
                <div>Taak toevoegen:</div>
                <div>
                    <span><input type='text' id='new-item'></input></span>
                    <span><button className='addTask' onClick={() => this.props.Additem()}>+</button></span>
                </div>
            </div>
        )
    }
}

export default Addtask;