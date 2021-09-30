import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Fooddeatails.css'
const Fooddetails = () => {
    const {mealID} = useParams();
    const [mealdetails, setMealdetails] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMealdetails(data.meals[0]))
    }, [])
    return (
        <div className="row details">
            <div className="col-lg-12 d-flex justify-content-evenly">
             <Card className="cards" style={{ width: '20rem' }}>
                <Card.Img variant="top"  src={mealdetails.strMealThumb} />
                <Card.Body>
                <Card.Text>
                    {mealdetails.strInstructions}
                </Card.Text>
                </Card.Body>
            </Card>
            <div className="ingrediant">
                <h3>All Ingredients</h3>
                <li>{mealdetails.strIngredient1}</li>
                <li>{mealdetails.strIngredient2}</li>
                <li>{mealdetails.strIngredient3}</li>
                <li>{mealdetails.strIngredient4}</li>
                <li>{mealdetails.strIngredient5}</li>
                <li>{mealdetails.strIngredient6}</li>
                <li>{mealdetails.strIngredient7}</li>
                <li>{mealdetails.strIngredient8}</li>
                <Button><Link className="links" to="/foods" ><Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                    Back To Manu
                </Fab></Link></Button>
            </div>
            </div>
        </div>
    );
};

export default Fooddetails;