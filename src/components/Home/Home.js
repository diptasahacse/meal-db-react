import React from 'react';
import { Container } from 'react-bootstrap';
import AllMeals from '../AllMeals/AllMeals';
import InputField from '../InputField/InputField';


const Home = () => {
    const searchMealListener = (event)=>{
        console.log(event.target.value)
    }
    return (
        <Container>
            <InputField searchMealListener={searchMealListener}></InputField>
            <AllMeals></AllMeals>
            
        </Container>
    );
};

export default Home;