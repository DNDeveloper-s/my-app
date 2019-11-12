import React, {Component} from 'react';
import Person from './Person/Person';
class Persons extends Component{
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js], getDerivedStateFromProps', state);
    //     return state;
    // }

    componentDidMount() {
        console.log('[Persons.js], componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js], shouldComponentUpdate');
        return (nextProps.persons !== this.props.persons || nextProps.isAuthenticated !== this.props.isAuthenticated);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js], componentDidUpdate');
    }

    render() {
        console.log('[Persons.js], rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(e) => this.props.changed(e, person.id)}
                    isAuth={this.props.isAuthenticated}
                />
            );
        });
    }
}

export default Persons;