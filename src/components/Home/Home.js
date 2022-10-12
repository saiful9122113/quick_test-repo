import React, { useContext } from 'react';
import image from '../Images/header.jpg'
import Quiz from '../Quiz/Quiz';
import { QuizContext } from '../Root/Root';
import './Home.css'



const Home = () => {

    const quizDataLoader = useContext(QuizContext);
    const quizes = (quizDataLoader.data)
    // console.log(quizes)

    return (
        <div className='home-container'>
            <div className='header-container'>
                <h1 className='text-5xl font-bold space-y-5 py-10 text-pink-600'>Congratulations and best wishes for visiting <br></br> my Quiz Contest Block website.</h1>
                <img className='w-4/5 mx-auto h-96 rounded-lg' src={image} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-3/5 mx-auto'>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;