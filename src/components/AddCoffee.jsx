import React from 'react';

const AddCoffee = () => {

    const handleCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(newCoffee);
    }
    return (
        <div className="bg-[#F4F3F0] p-20">
            <h1 className="text-3xl font-extrabold text-center mb-8">Add a Coffee</h1>
            <form onSubmit={handleCoffee}>
                {/* Row of Coffee Name and Quantity  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Coffee Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Row of Coffee Supplier and Taste  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Coffee Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Row of Coffee Category and Details  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Coffee Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Row of Coffee Name and Quantity  */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Row of Coffee Name and Quantity  */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="submit" value="Add Coffee" className="input input-bordered md:w-full cursor-pointer bg-[#D2B48C] font-bold border-black" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;