import React, {Component} from 'react';

import AppClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

class App extends Component {
    constructor(props) {
        console.log('[App.js], constructor');
        super(props);
        this.state = {
            persons: [
                { id: "asdasdd", name: "Saurabh", age: 29 },
                { id: "fgsadfas", name: "Suraj", age: 18 },
                { id: "tuyujbhf", name: "Ramesh", age: 41 }
            ],
            some: 'Some Other Property',
            showPersons: false,
            showCockPit: true,
            changeCounter: 0,
            isAuthenticated: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js], getDerivedStateFromProps', state);
        return state;
    }

    componentDidMount() {
        console.log('[App.js], componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = [...this.state.persons];
        person[personIndex].name = event.target.value;
        this.setState((prevState, props) => {
            return {
                persons: person,
                changeCounter: prevState.changeCounter + 1
            }
        });
    };

    togglePersonsHandler = () => {
        const doesState = this.state.showPersons;
        this.setState({
            showPersons: !doesState
        })
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    loginHandler = () => {
        this.setState({isAuthenticated: true})
    };

    render() {
        console.log('[App.js], render');
        let persons = null;
        if(this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    // isAuthenticated={this.state.isAuthenticated}
                />
            );
        }
        return (
            <Aux>
                <button onClick={() => {this.setState({showCockPit: !this.state.showCockPit})}}>Toggle CockPit</button>
                <AuthContext.Provider value={{
                    authenticated: this.state.isAuthenticated,
                    login: this.loginHandler
                }}>
                    {this.state.showCockPit ?
                        <Cockpit
                            personsLength={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            toggle={this.togglePersonsHandler}
                            // login={this.loginHandler}
                        /> : null}
                    {persons}
                </AuthContext.Provider>
                <p>{this.state.some}</p>
            </Aux>
        )
    }
}

export default withClass(App, AppClasses.App);
