import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {

    constructor() {
        super(props);

        state = {
            person: [
                {name: 'Max', age: 21},
                {name: 'Maxmallian', age: 23},
                {name: 'Brandon', age: 25}
            ]
        }
    }


    clickSwitchHandler = () => {
        this.setState({
            person: [
                {name: 'newFirstName', age: 33},
                {name: 'newFirstName2', age: 34},
                {name: 'newFirstName3', age: 54}
            ]
        })
    }

    nameHandler = (event) => {
        this.setState({
            person: [
                {name: 'Max', age: 33},
                {name: event.target.value, age: 3},
                {name: '', age: 63}
            ]
        })
    };

    render() {
        const style = {
            backgroundColor:'while',
            font : 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>Hello I am react App</h1>
                <button style={style} onClick={this.clickSwitchHandler}> Switch clicked</button>
                <Person name={this.state.person[0].name}
                        age={this.state.person[0].age}/>
                <Person onChange={this.nameHandler}
                        name={this.state.person[1].name}
                        age={this.state.person[1].age}
                        click={this.clickSwitchHandler.bind(this, 'Max')}
                        changed={this.nameHandler}> My hobbies: Racing>

                </Person>
                <Person name={this.state.person[2].name}
                        age={this.state.person[2].age}/>
            </div>
            // React.createElement('div',null,'h1','Hi I\'m a react App'); // This actually how react comples it.
        );
    }
}

export default App;