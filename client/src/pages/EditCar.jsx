import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import carsAPI from '../services/carsAPI';
import otherAPI from '../services/otherAPI';

const EditCar = () => {
    const { id } = useParams(); // Get car ID from URL parameters
    const navigate = useNavigate(); // To navigate after the edit is done
    const [car, setCar] = useState({ name: '', price: '', exterior: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarById = async () => {
            try {
                const data = await carsAPI.getCarById(id);
                const exterior = await otherAPI.fetchExteriorById(data.exterior);
                setCar({ ...data, exterior: exterior.color });
            } catch (error) {
                console.error("Error fetching car data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarById();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await carsAPI.updateCar(id, car);
            alert("Car updated successfully!");
            navigate(`/car/${id}`); // Redirect to the car details page after update
        } catch (error) {
            console.error("Error updating car:", error);
            alert("Failed to update car. Please try again.");
        }
    };

    if (loading) {
        return <p>Loading car details...</p>; // Simple loading state
    }

    console.log(car)

    return (
        <div className="edit-car-container">
            <h1>Edit Car</h1>
            <form onSubmit={handleSubmit} className="edit-car-form">
                <div className="form-group">
                    <label htmlFor="name">Car Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={car.name}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                        
                    />
                </div>
                
                <button type="submit" className="submit-button">Update Car</button>
            </form>
        </div>
    );
};

export default EditCar;
