import React, {Component} from 'react';
import './App.css';
import Person from './../components/Persons/Person/Person'
import Cockpit from './../components/cockpit/Cockpit'

class App extends Component {
        constructor(props) {
            super(props);
            // console.log('[App.js] Inside constructor ', props);
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
            showPerson: false
        }
    }

    nameChangeHandler(event, id) {
        // const person = this.state.persons.find();
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
    }


    // if(this.state.showPerson) {
    //     btnClass = classes.red;
    // }
    //
    // if (this.state.persons.length <= 2) {
    //     assignedClasses.push(classes.red);
    // }
    //
    // if (this.state.persons.length <= 1) {
    //     assignedClasses.push(classes.bold);
    // }

    // componentWillMount(){
    //     console.log('[App.js] inside component will mount');
    // }

    togglePersonHandler() {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});

    }

    deletePersonHandler(personIndex) {

        // const persons = this.state.persons.slice()
        const persons = [...this.state.persons];
        console.log(persons.splice(personIndex, 1),'personssssss')
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    // const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({},this.state.persons[personIndex]);
    //this is alternative of spread operator for objects;
    // person.name = event.target.value;
    // const persons = [...this.state.persons];
    // persons[personIndex] = person;
    // this.setState({persons: persons});
    // }

    render() {

        let persons = null;
        // const style = {
        //     backgroundColor: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer'
        // }

        if (this.state.showPerson) {
            persons = (
                <div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    // persons={this.state.persons}
                    // clicked={this.deletePersonHandler}
                    // changed={this.nameChangeHandler}
                    />

                    <Person name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                    />
                    <Person name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                    />


                </div>
            )
        }

        return (
            <div className={"App"}>
                <h1>Hi, I am React App</h1>
                <p > This is really cool</p>
                <button  onClick={this.togglePersonHandler}>Show Persons
                </button>
                    {/*appTitle={this.props.title}*/}
                    {/*showPersons={this.state.showPerson}*/}
                    {/*persons={this.state.persons}*/}
                    {/*clicked={this.togglePersonHandler}*/}
                {persons}
            </div>
        )
    }
}

export default App;