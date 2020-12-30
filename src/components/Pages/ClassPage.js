import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentClass } from '../../store/actions/class';
import DeckList from '../DeckList/DeckList';

function ClassPage(props) {
    const classId = props.match.params.id;
    const dispatch = useDispatch();
    const currentClass = useSelector(state => state.currentClass);

    useEffect(() => {
        dispatch(getCurrentClass(classId));
    }, []);


    return (
        <>
            <h3>{currentClass.className}</h3>
            <p>Hi</p>
            {DeckList}
        </>
    );
}

export default ClassPage;