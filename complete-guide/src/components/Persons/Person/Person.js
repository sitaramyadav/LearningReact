import Radium from 'radium';
import WithClass from '../../../hoc/WithClass'
import React, {Component} from 'react';
import './Person.css'

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor');
    }


    componentWillMount() {
        console.log('[Person.js] Inside ComponentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] Inside componentDidMount()');

        const classes = {Person:'Person'}

        return (<WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name}. My age is {this.props.age}</p>
                <p>props.children</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <div/>
        </WithClass>)
   }

}


export default Radium(Person);
