import React, {Component} from 'react';
import './App.css';
import classes from './App.css'
import Person from './../components/Persons/Person/Person'
// import Cockpit from './../components/cockpit/Cockpit'

class App extends Component {
    constructor(props) {
        super(props);
        this.togglePersonHandler = this.togglePersonHandler.bind(this);
        this.deletePersonHandler = this.deletePersonHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.state = {
            persons: [
                {id: 'first_person', name: 'Max', age: 21},
                {id: 'second_person', name: 'Maxmallian', age: 23},
                {id: 'thired_person', name: 'Brandon', age: 25}
            ],
            otherState: 'some other value',
            showPersons: false
        }
    }

    nameChangeHandler(event, id) {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler(personIndex) {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    togglePersonHandler() {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }

    render() {

        let persons = null;
        let btnClass = 'button green';

        if (this.state.showPersons) {
            persons = (
                <div>{
                    this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            click={() => this.deletePersonHandler(person.id)}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })
                }
                </div>
            )
            btnClass = 'button red'
        }

        const assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I am React App</h1>
                <p className={assignedClasses.join(' ')}> This is really cool</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        )
    }
}

export default App;