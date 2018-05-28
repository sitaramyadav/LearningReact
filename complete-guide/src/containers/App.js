import React, {Component} from 'react';
import './App.css';
import Person from './components/Persons/Person/Person'
import './components/Persons/Person/Person.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            persons: [
                {id: 'first_person', name: 'Max', age: 21},
                {id: 'second_person', name: 'Maxmallian', age: 23},
                {id: 'thired_person', name: 'Brandon', age: 25}
            ],
            showPerson: false
        }
        this.togglePersonHandler = this.togglePersonHandler.bind(this);
        this.deletePersonHandler = this.deletePersonHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
    }

    togglePersonHandler() {
        const doesShow = false;
        this.setState({showPerson: !doesShow})
    }

    deletePersonHandler(personIndex) {
        let person = [...this.state.persons];
        person.splice(personIndex, 1);
        this.setState({persons: person});

    }

    nameChangeHandler(event, id) {
        // const person = this.state.persons.find();
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({},this.state.persons[personIndex]);
        //this is alternative of spread operator for objects;
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>)
        }

        return (
            <div className="App">
                <h1>Hello I am react App</h1>
                <button style={style}
                        onClick={this.togglePersonHandler}> Toggle Person
                </button>
                {persons}
            </div>
        )
    }
}

export default App;