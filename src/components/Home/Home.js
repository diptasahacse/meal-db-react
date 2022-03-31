import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AllMeals from '../AllMeals/AllMeals';
import InputField from '../InputField/InputField';


const Home = () => {
    const [inputText, setInputText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(meals => setMeals(meals.data.meals))
    },[inputText])
    
    const searchMealListener = (event)=>{
        setInputText(event.target.value);
    }
    
    return (
        <Container>
            <InputField searchMealListener={searchMealListener}></InputField>
            <AllMeals meals={meals}></AllMeals>
            
        </Container>
    );
};

export default Home;