import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const { mealId } = useParams();
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(meal => setMeal(meal.data.meals[0]))

    }, [])
    const {strCategory,strMeal,strMealThumb,strSource,strTags,strInstructions} = meal;
    return (
        <Container>
            <Card className='my-5 w-75 mx-auto'>
                <Card.Img className='w-100' style={{height: "350px"}} variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text> <strong>Instruction : </strong> {strInstructions}</Card.Text>
                    <p><strong>Tags: </strong>{strTags}</p>
                    <p><strong>Catagory: </strong>{strCategory}</p>
                    <p><strong>Source: </strong>{strSource}</p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MealDetails;