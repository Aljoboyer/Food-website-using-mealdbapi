import React from 'react';
// import background from '../asset/bgtwo.jpg'
import './Welcomelayout.css';
import Frontfoods from '../Frontfoods/Frontfoods'
const Welcomelayout = () => {
    return (
        <div className="welcometwo row d-flex flex-end justify-content-center align-items-center">
            <div className="ms-auto welcom-des col-lg-10 col-md-8 col-sm-8">
                <h1 className="eachone">You Don't Need To diet just Eat Healthy Food</h1>
            </div>

            <Frontfoods></Frontfoods>

        </div>
    );
};

export default Welcomelayout;