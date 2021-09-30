import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import Food from './Food'
const Foods = () => {
    const [meals, setMeals] = useState([]);
    const [searchtext , setSearchtext] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchtext])
   const ChangeHandle = (e) => {
        const Searchvalue = e.target.value;
        setSearchtext(Searchvalue);
   }
    return (
        <div className="bg-dark text-light row justify-content-center text-center">
            <h3>Our Regular Manu</h3>
            <div className="search-field col-lg-8">
            <InputGroup onChange={ChangeHandle} className="mb-3">
            <FormControl
            placeholder="Search Your Favourite Food"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-warning" id="button-addon2">
            Search
            </Button>
            </InputGroup>
            </div>
            <div className="food-div row g-4">
                {
                    meals.map(text => <Food key={text.idMeal} meal={text} ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;