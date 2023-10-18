import React from 'react';
import { FaEdit, FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee);
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDeleteCoffee = id => {
        // Sweet Alert:
        Swal.fire({
            title: 'Are you sure to delete Coffee?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire(
                                'Cannot delete it',
                                'Your coffee has not been deleted.',
                                'error'
                            )
                        }
                    })

            }
        })

    }
    return (
        <div className="card md:card-side bg-base-100 shadow-2xl py-8 w-full">
            <div className="w-2/3 mx-auto">
                <figure><img className="w-full" src={photo} alt="Movie" /></figure>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-2/3 pe-8">
                    <h2 className=""><span className="font-bold text-red-950 text-2xl">{name}</span> </h2>
                    <p className='mt-2 text-red-800 '>{details}</p>
                </div>
                <div className="justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn bg-green-200 rounded-lg hover:bg-red-200 border-solid border-b-lg">
                            <FaEye className='text-2xl font-bold text-green-700'></FaEye>
                        </button>
                        <button className="btn bg-green-200 rounded-lg hover:bg-red-200 border-solid border-b-lg">
                            <FaEdit className='text-2xl font-bold text-gray-900'></FaEdit>
                        </button>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn bg-green-200 rounded-lg hover:bg-red-200 border-solid border-b-lg">
                            <p className='text-2xl text-red-700 font-bold'>x</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;