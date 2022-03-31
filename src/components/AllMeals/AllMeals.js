import React from 'react';
import { Row } from 'react-bootstrap';
import MealCard from '../MealCard/MealCard';

const AllMeals = ({meals}) => {
    return (
        <Row xs={1} md={4} className="g-4">
            {
                meals.map(meal => <MealCard key={meal.idMeal} meal={meal}></MealCard>)
            }

        </Row>
    );
};

export default AllMeals;