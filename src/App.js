import React, {Component} from 'react';
import AppClasses from './App.module.css';
import Person from './Person/Person';

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
    }

    render() {

        let btnClass = '';
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(e) => this.nameChangedHandler(e, person.id)}/>
                        );
                    })}
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
