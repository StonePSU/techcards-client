import React, { useEffect } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useAuth from '../../hooks/useAuth';
import ClassList from './ClassList';
import ClassPage from './ClassPage';
import DeckPage from './DeckPage';
import { logoutUser } from '../../store/actions/auth';
import "./Dashboard.css";

const Dashboard = (props) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    }

    useEffect(() => {
        console.log('dashboard mounting')
    }, []);

    return useAuth(props) && (
        <div className="dashboard">
            <nav style={{ padding: "40px" }}>
                <li><Link to={`${props.match.path}/classes`}>My Classes</Link></li>
                <li><Link to={`${props.match.path}/decks`}>My Decks</Link></li>
                <li><a href="#" onClick={handleClick} >Logout</a></li>
            </nav>
            <Switch>
                <Route exact path={`${props.match.path}/classes`} component={ClassList} />
                <Route path={`${props.match.path}/classes/:id`} component={ClassPage} />
                <Route path={`${props.match.path}/decks`} component={DeckPage} />
                <Route render={() => <h1>General Dashboard Content</h1>} />
            </Switch>
        </div>
    )
}

export default Dashboard;
