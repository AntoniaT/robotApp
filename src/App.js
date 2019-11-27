import React, { Component } from 'react';

import CardList from './CardList';
//import { Robots } from './Robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component{
  constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }

    onSearchChange(event){
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
          <h1>Loading</h1> :
          (
            <div className=''>
              <h1 className='heading'>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CardList robots={filteredRobots} />
              </Scroll>
            </div>
          );
      }
    }


export default App;