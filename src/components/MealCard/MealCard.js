import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MealCard = ({ meal }) => {
    const {idMeal,strMeal,strMealThumb,strInstructions} = meal;
    const navigate = useNavigate();
    const seeDetailsHandler = ()=>{
        const path = `/meals/${idMeal}`;
        navigate(path)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0,100)+"...."}
                    </Card.Text>
                    <Button onClick={seeDetailsHandler} variant="primary" size='sm'>See Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MealCard;