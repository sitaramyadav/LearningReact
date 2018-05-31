import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red ;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.Red);
        console.log(assignedClasses,'===',classes.Red)
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.Bold);
    }

    return ( <div className={classes.Cockpit}>
                <h1>Hi, I am React App</h1>
                <p className={assignedClasses.join(' ')}> This is really cool</p>
                <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
                </button>
            </div>
        )
};

export default Cockpit;
