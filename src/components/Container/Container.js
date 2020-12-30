import React from 'react';
import "./Container.css";

const Container = ({ width, children }) => {
    const styles = {
        width: `${width}px`,
    };

    return (
        <div className="container" style={styles}>
            {children}
        </div>
    )
}

export default Container;