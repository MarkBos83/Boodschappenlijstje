import React from 'react';

import Addtask from './Addtask';
import Header from './Header';
import Item from './Item';

class App extends React.Component {
  id = 0;
  state = {
    items: [

    ],
    bought: 0
  }

  Counter() {
    this.id += 1;
  }

  Done = (index) => {
    const check = document.getElementsByClassName('done');
    const itemdone = document.getElementsByClassName('item')
    const itemNamedone = document.getElementsByClassName('itemName')[index]


    if (check[index].checked) {
      itemdone[index].style.textDecoration = 'line-through';
      itemdone[index].style.color = 'gray';
      itemNamedone.style.textDecoration = 'line-through';
      itemNamedone.style.color = 'gray';
      const move = this.state.items[index];
      const filteredArray = this.state.items.filter(item => item !== this.state.items[index])
      const newarray = filteredArray.concat(move);
      this.setState({ items: newarray });
    } else {
      itemdone[index].style.textDecoration = 'none';
      itemdone[index].style.color = 'black';
      itemNamedone.style.textDecoration = 'none';
      itemNamedone.style.color = 'black';
      const filteredArray2 = this.state.items.filter(item => item === this.state.items[index])
      const filteredArray = this.state.items.filter(item => item !== this.state.items[index])
      const newarray = filteredArray2.concat(filteredArray);
      this.setState({ items: newarray });
    }
    const bought = document.querySelectorAll('.done:checked').length
    this.setState({ bought })
  }

  Removeitem = (index) => {
    const filteredArray = this.state.items.filter(item => item !== this.state.items[index])
    this.setState({ items: filteredArray });
    const check = document.getElementsByClassName('done');
    if (check[index].checked) {
      this.state.bought -= 1
    }
  }

  Additem = () => {
    const newItem = document.querySelector('#new-item').value;
    const date = new Date().toLocaleString() + "";
    if (newItem !== "") {
      this.Counter();
      const toAdd = [{
        name: newItem,
        id: this.id,
        date: date
      }]
      const joined = toAdd.concat(this.state.items);
      this.setState({ items: joined })
      document.getElementById("new-item").value = "";
    }
  }

  Change = (index) => {
    let element = document.getElementsByClassName('itemName')[index].value
    const newArray = this.state.items
    newArray[index].name = element
    this.setState({ items: newArray })
  }

  render() {
    return (
      <div className='grocerieList'>
        <Header title='Kopen:' bought={this.state.bought} toBuy={this.state.items.length} />
        <div className='main'>
          <Addtask
            Additem={this.Additem}
          />

          {this.state.items.map((item, index) =>
            <Item
              itemName={item.name}
              key={item.id.toString()}
              index={index}
              Removeitem={this.Removeitem}
              Done={this.Done}
              date={item.date}
              Change={this.Change}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App;