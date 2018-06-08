import Radium from 'radium';

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

        return (<div className="Person">
                <p onClick={this.props.click}>I am {this.props.name}. My age is {this.props.age}</p>
                <p>props.children</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <div/>
        </div>)
   }

}


export default Radium(Person);
