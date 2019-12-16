import React from 'react';
import './title.css';

const Title = (
    {children, color, little, medium, big, className}
) => {
    const styles = little ? 'little' : medium ? 'medium' : big ? 'big' : 'medium';
    return (
        <h1 className={`${styles} ${className}`} style={{color: color}}>
            {children}
        </h1>
    );
};

export default Title;