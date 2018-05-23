import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

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

    nameChangeHandler(event, id,index) {
        // const person = this.state.persons.find();
        this.setState({persons:[...this.state.persons,
            this.state.persons[index].name= event.target.value]
        });
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
            console.log(this.state.persons)
            persons = this.state.persons.map((person, index) => {
                return <Person name={person.name}
                               age={person.age}
                               click={() => this.deletePersonHandler(index)}
                               key={person.id}
                               changed={(event) => this.nameChangeHandler(event, person.id, index)}
                />
            })
        }
        return (
            <div className="App">
                <h1>Hello I am react App</h1>
                <button style={style}
                        onClick={this.togglePersonHandler}> Toggle Person
                </button>
                {persons}
            </div>
            // React.createElement('div',null,'h1','Hi I\'m a react App'); // This is actually how react complies it.
        );
    }
}

export default App;