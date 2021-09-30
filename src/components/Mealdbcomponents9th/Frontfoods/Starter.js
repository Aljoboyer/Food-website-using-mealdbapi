import React from 'react';

const Starter = (props) => {
    const {name, desciption,img} = props.meal
    return (
        <div className="starter col-lg-4 col-md-6 col-sm-12">
            <div className="d-flex">
                <div>
                    <img className="rounded" width="200px" height="200px" src={img} alt="" />
                </div>
                <div className="ms-3">
                    <h3>{name}</h3>
                    <small>{desciption}</small>
                </div>
            </div>
        </div>
    );
};

export default Starter;