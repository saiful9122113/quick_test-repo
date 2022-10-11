
import React from 'react';

const Link = ({route}) => {
    const {path,name}=route;
    return (
        <div>
            <li className='mr-12'>
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

export default Link;