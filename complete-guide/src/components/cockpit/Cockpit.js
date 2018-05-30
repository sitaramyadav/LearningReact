// import React, {Component} from 'react';
//
// import classes from './Cockpit.css';
//
// class Cockpit extends Component{
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             assignedClasses : [],
//             btnClass : ''
//         }
//     }
//
//
//     // if(this.props.showPerson) {
//     //     btnClass = classes.red;
//     // }
//     //
//     // if (this.props.persons.length <= 2) {
//     //     assignedClasses.push(classes.red);
//     // }
//     // //
//     // if (this.props.persons.length <= 1) {
//     //     assignedClasses.push(classes.bold);
//     // }
//
//     render(){
//         return (
//         <div className={classes.Cockpit}>
//             <h1> {this.props.appTitle} </h1>
//             <p className={assignedClasses.join(' ')}> This is Real</p>
//             <button
//                 className={btnClass}
//                 onClick={this.props.clicked}>Toggle Persons
//             </button>
//         </div>
//     )
//     }
// }
//
//
// export default Cockpit;