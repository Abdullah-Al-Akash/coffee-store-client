import React from 'react';

const AddCoffee = () => {
    return (
        <div className="mt-12 bg-orange-100 md:w-3/4  mx-auto rounded-md">
            <div className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-center pb-4">Add New Coffee</h2>
                <form className="p-6">
                    <div className="md:flex md:justify-center">
                        <div className="">
                            <h4 className="text-xl font-bold pb-3">Name</h4>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered input-sm w-96" />
                        </div>
                        <div className="md:ps-24">
                            <h4 className="text-xl font-bold pb-3">Chef</h4>
                            <input type="text" placeholder="Enter Chef Name" className="input input-bordered input-sm w-96" />
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:pt-7">
                        <div className="">
                            <h4 className="text-xl font-bold pb-3">Supplier</h4>
                            <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered input-sm w-96" />
                        </div>
                        <div className="md:ps-24">
                            <h4 className="text-xl font-bold pb-3">Taste</h4>
                            <input type="text" placeholder="Enter Coffee Taste" className="input input-bordered input-sm w-96" />
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:pt-7">
                        <div className="">
                            <h4 className="text-xl font-bold pb-3">Category</h4>
                            <input type="text" placeholder="Enter Coffee Category" className="input input-bordered input-sm w-96" />
                        </div>
                        <div className="md:ps-24">
                            <h4 className="text-xl font-bold pb-3">Details</h4>
                            <input type="text" placeholder="Enter Coffee Details" className="input input-bordered input-sm w-96" />
                        </div>
                    </div>
                    <div className=" md:pt-7">
                        <div className="md:w-full md:flex md:justify-center">
                            <h4 className="text-xl font-bold pb-3 md:pe-2">Photo URL</h4>
                            <input type="text" placeholder="Enter Photo URL" className="input input-bordered input-sm md:w-8/12 w-96" />
                        </div>
                    </div>
                    <div className="pt-5 w-full text-center">
                        <button className="btn font-bold md:w-9/12 w-96 bg-orange-700 text-white hover:bg-orange-800">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;