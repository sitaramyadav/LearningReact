import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        person: [
            {name: 'firstName1', age: 21},
            {name: 'firstName2', age: 23},
            {name: 'firstName3', age: 25}
        ]
    };
    clickSwitchHandler  = () => {
        console.log('Switch clicked called :)!!!!!');
    };

    render() {
        return (
            <div className="App">
                <h1>Hello I am react App</h1>
                <h1>This is really working</h1>
                <button onClick={this.clickSwitchHandler}> Switch clicked </button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
            </div>
            // React.createElement('div',null,'h1','Hi I\'m a react App'); // This actually how react comples it.
        );
    }
}

export default App;