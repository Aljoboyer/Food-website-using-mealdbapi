import React, { useEffect, useState } from 'react';
import Starter from './Starter'
const Frontfoods = () => {
    const [starters, setStarters] = useState([])
    useEffect(() => {
        fetch('./Foodsdata.JSON')
        .then(res => res.json())
        .then(data => setStarters(data))
    },[])
    return (
        <div className="row g-4 mt-4">
            {
                starters.map(start => <Starter meal={start} ></Starter>)
            }
        </div>
    );
};

export default Frontfoods;