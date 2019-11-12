import React, {useEffect, useRef, useContext} from 'react';

import CockpitClasses from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js], useEffect');
        // setTimeout(() => {
        //     alert('Saved date to Cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js], 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    });

    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = CockpitClasses.Red;
    }

    if(props.personsLength <= 2) {
        classes.push( CockpitClasses.red );
    }
    if(props.personsLength <= 1) {
        classes.push( CockpitClasses.bold );
    }
    return (
        <div className={CockpitClasses.Cockpit}>
            <h1>Hi, I'm react App.</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>Toggle Persons!</button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    )
};

export default React.memo(Cockpit);