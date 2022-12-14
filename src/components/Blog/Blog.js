import React from 'react';
import Answer from '../Answer/Answer';

const Blog = () => {
    return (
        <div className='mt-28'>
            <h3 className='text-2xl md:text-6xl font-bold px-3 py-10 md:py-22 wrap'>Question and Answer section</h3>
            <Answer></Answer>
        </div>
    );
};

export default Blog;