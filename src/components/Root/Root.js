import React, {createContext} from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export const QuizContext = React.createContext();

const Root = () => {

    const quizData = useLoaderData();
    // console.log(products.quizData.data)

    return (
        <QuizContext.Provider value={quizData.quizData}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Root;