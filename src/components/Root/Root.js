import React, {createContext} from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import Header from '../Header/Header';


export const QuizContext = React.createContext();

const Root = () => {

    const quizData = useLoaderData();
    // console.log(products.quizData.data)

    return (
        <QuizContext.Provider value={quizData.quizData}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Root;