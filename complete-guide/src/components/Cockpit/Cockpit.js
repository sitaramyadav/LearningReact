import React from 'react';
import './Cockpit.css'
import WithClass from '../../hoc/WithClass';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = 'Button';
    let classes = {Button: 'Button', Red: 'Red', Bold: 'Bold', Cockpit: 'Cockpit '};

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.Red); //classes = ['red']
        // console.log(assignedClasses,'===',classes.Red)
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.Bold); // classes = ['red', 'bold']
    }

    return (
        <WithClass classes = {classes.Cockpit}>
            <button onClick={() => {
            }}>Show Person
            </button>
            <h1> {props.appTitle} </h1>
            <p className={assignedClasses.join(' ')}> This is really Working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </WithClass>
    )
};

export default Cockpit;
