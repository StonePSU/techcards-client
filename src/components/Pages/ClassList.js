import React, { useState, useEffect } from 'react';
import { getClasses, createClass, deleteClass } from '../../store/actions/class';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ClassList = (props) => {
    const classes = useSelector(state => state.classes);
    const dispatch = useDispatch();
    const [className, setClass] = useState(null);

    useEffect(() => {
        dispatch(getClasses());
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(createClass({ className }))
        setClass("");
    }

    const handleChange = (e) => {
        setClass(e.target.value);
    }

    const handleDelete = (e, deletedClass) => {
        e.preventDefault();
        dispatch(deleteClass(deletedClass));
    }

    const classList = classes.map(item => {
        return (
            <li key={item._id}><Link to={`${props.match.path}/${item._id}`}>{item.className}</Link>
                <button type="button" onClick={(e) => {
                    handleDelete(e, item);
                }}>Delete</button>
            </li>
        )
    })
    return (
        <div>
            <h3>My Classes</h3>
            { classList}
            <input type="text" placeholder="Class Name" onChange={handleChange} value={className || ""} />
            <button type="button" onClick={handleClick}>Add Class</button>
        </div>
    )
}

export default ClassList;