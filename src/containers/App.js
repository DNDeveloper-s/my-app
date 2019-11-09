import React, {Component} from 'react';
import AppClasses from './App.module.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons: [
            { id: "asdasdd", name: "Saurabh", age: 29 },
            { id: "fgsadfas", name: "Suraj", age: 18 },
            { id: "tuyujbhf", name: "Ramesh", age: 41 }
        ],
        some: 'Some Other Property',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = [...this.state.persons];
        person[personIndex].name = event.target.value;
        this.setState({persons: person});
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

    render() {

        let btnClass = '';
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );

            btnClass = AppClasses.Red;
        }

        const classes = [];

        if(this.state.persons.length <= 2) {
            classes.push( AppClasses.red );
        }
        if(this.state.persons.length <= 1) {
            classes.push( AppClasses.bold );
        }

        return (
            <div className={AppClasses.App}>
                <h1>Hi, I'm react App.</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons!</button>
                {persons}
                <p>{this.state.some}</p>
            </div>
        )
    }
}

export default App;
