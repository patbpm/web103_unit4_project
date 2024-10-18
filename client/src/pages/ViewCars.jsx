import React, { useEffect, useState } from "react";
import "../App.css";
import carsAPI from "../services/carsAPI";
import { Link } from "react-router-dom";

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await carsAPI.getAllCars();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []); // Added empty dependency array to avoid infinite loop

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await carsAPI.deleteCar(id);
        // Update the state to remove the deleted car
        setCars(cars.filter((car) => car.id !== id));
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };

  return (
    <main className="car-gallery">
      {cars.map((car) => (
        <article key={car.id} className="car-card">
          <header>
            <h3>{car.name}</h3>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/Honda-logo.svg" 
              alt={`${car.name} image`} 
              className="car-image" 
            />
          </header>
          
          <footer className="car-price">
            <p className="price">${car.price}</p>
            <Link to={`/customcars/${car.id}`} className="details-link">Details</Link>
            <button 
              className="delete-button" 
              onClick={() => handleDelete(car.id)}
            >
              Delete
            </button>
          </footer>
        </article>
      ))}
    </main>
  );
};

export default ViewCars;
