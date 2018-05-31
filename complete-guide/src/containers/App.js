import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

class App extends Component {
    constructor(props) {
        super(props)
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

        if (this.state.showPersons) {
            persons = <ErrorBoundary key='id'>
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
            </ErrorBoundary>
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
                {persons}
            </div>
        )
    }
}

export default App;