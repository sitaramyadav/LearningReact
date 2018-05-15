import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'Seetaram'
    }
    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div className="App">
                {/*<h1>Hello I am react App</h1>*/}
                {/*<button style={style} onClick={this.clickSwitchHandler}> Switch clicked</button>*/}
                {/*<Person name={this.state.person[0].name}*/}
                {/*age={this.state.person[0].age}/>*/}
                {/*<Person onChange={this.nameHandler}*/}
                {/*name={this.state.person[1].name}*/}
                {/*age={this.state.person[1].age}*/}
                {/*click={this.clickSwitchHandler.bind(this, 'Max')}*/}
                {/*changed={this.nameHandler}> My hobbies: Racing>*/}

                {/*</Person>*/}
                {/*<Person name={this.state.person[2].name}*/}
                {/*age={this.state.person[2].age}/>*/}

                {/*<ol>*/}
                    {/*<li>Create TWO new components: UserInput and UserOutput</li>*/}
                    {/*<li>UserInput should hold an input element, UserOutput two paragraphs</li>*/}
                    {/*<li>Output multiple UserOutput components in the App component (any paragraph texts of your*/}
                        {/*choice)*/}
                    {/*</li>*/}
                    {/*<li>Pass a username (of your choice) to UserOutput via props and display it there</li>*/}
                    {/*<li>Add state to the App component (=> the username) and pass the username to the UserOutput*/}
                        {/*component*/}
                    {/*</li>*/}
                    {/*<li>Add a method to manipulate the state (=> an event-handler method)</li>*/}
                    {/*<li>Pass the event-handler method reference to the UserInput component and bind it to the*/}
                        {/*input-change event*/}
                    {/*</li>*/}
                    {/*<li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput*/}
                    {/*</li>*/}
                    {/*<li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>*/}
                    {/*<li>Add styling of your choice to your components/ elements in the components - both with inline*/}
                        {/*styles and stylesheets*/}
                    {/*</li>*/}
                {/*</ol>*/}
                <UserInput changed={this.usernameChangedHandler}
                           currentName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName="Ben"/>
            </div>
        );
    }
}

export default App;