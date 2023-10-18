import React from 'react';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee);
    const { name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card md:card-side bg-base-100 shadow-2xl py-8 w-full">
            <div className="w-2/3 mx-auto">
                <figure><img className="w-full" src={photo} alt="Movie" /></figure>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-2/3">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">Viewer</button>
                        <button className="btn">Edit</button>
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;