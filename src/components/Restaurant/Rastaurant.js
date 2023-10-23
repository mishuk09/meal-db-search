import React, { useEffect, useState } from 'react';

const Rastaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {

        const url = `www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    }, [searchText])



    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h3>Meal DB Search...</h3>
            <input onChange={searchFood} type="text" />
            {/* <br /> */}

            <h4>Total length:{meals.length}</h4>
        </div>
    );
};

export default Rastaurant;