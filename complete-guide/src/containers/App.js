import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Radium, {style} from 'radium';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside constructor ====', classes.bold,'=====7');
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

    // state = {
    //     persons: [
    //         {id: 'first_person', name: 'Max', age: 21},
    //         {id: 'second_person', name: 'Maxmallian', age: 23},
    //         {id: 'thired_person', name: 'Brandon', age: 25}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // }

    // this is the new way of defining state.

    componentWillMount() {
        console.log('[App.js] Inside ComponentWillMount()');
    }

    componentDidMount( ) {
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate (nextProps, nextState ) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate() ');
    //
    //     // return true;
    //     return nextProps.persons !== this.props.persons ||
    //     nextState.showPersons !==this.state.showPersons;
    // }

    // PureComponent does this without using shouldComponentUpdate.
    // React checks if there is any changes in props and state then only update the dom else don't

    componentWillUpdate ( mextProps, nextState) {
        return console.log('[UPDATE App.js] Inside componentWillUpdate() ');
    }

    componentDidUpdate ( ) {
        console.log('[UPDATE App.js] Inside componentDidUpdate');
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

        console.log('[App.js] Inside render()')

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
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler} />
                {persons}
            </div>
        )
    }
}

export default Radium(App);