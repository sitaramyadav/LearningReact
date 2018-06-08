import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor (props) {
        super(props);
        console.log('[Persons.js] Inside constructor');
    }

    componentWillMount() {
        console.log('[Persons.js] Inside ComponentWillMount()');
    }

    componentDidMount( ) {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillUpdate ( mextProps, nextState) {
        return console.log('[UPDATE Persons.js] Inside componentWillUpdate() ');
    }

    componentDidUpdate ( ) {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    componentWillReceiveProps ( nextProps) {
        console.log('[Persons.js] Inside componentWillRecieveProps', nextProps);
    }

    // shouldComponentUpdate ( nextProps, nextState) {
    //     console.log('[UPDATE Person.js] Inside the shouldComponentUpdate() ', nextProps, nextState);
    //
    //     // return nextProps.persons !== this.props.persons ||
    //     //     nextProps.changed !== this.props.changed ||
    //     //     nextProps.clicked e!== this.props.clicked;
    //
    //        return false
    // }

    componentWillUpdate ( mextProps, nextState) {
        return console.log('[UPDATE Persons.js] Inside componentWillUpdate() ', nextState, nextState);
    }

    componentDidUpdate( ) {
        console.log('[Persons.js] Inside componentDidUpdate()');
    }

    render ( ) {
        console.log('[Persons.js] Inside componentDidMount()');
        return this.props.persons.map( ( person, index) => {
            return <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id) }
            />
        })
    }
}

export default Persons;
