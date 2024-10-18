import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css"; // Ensure your CSS is included
import carsAPI from "../services/carsAPI";
import otherAPI from "../services/otherAPI";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // To navigate after deletion or editing

  useEffect(() => {
    const fetchCarById = async () => {
      const data = await carsAPI.getCarById(id);
      const exterior = await otherAPI.fetchExteriorById(data.exterior);
      setCar({ ...data, color: exterior.color, image: exterior.image });
    };

    fetchCarById();
  }, [id]);

  if (!car) {
    return <p>Loading car details...</p>; // Simple loading state
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await carsAPI.deleteCar(id);
        alert("Car deleted successfully!");
        navigate("/viewcars"); // Navigate to the view cars page after deletion
      } catch (error) {
        console.error("Error deleting car:", error);
        alert("Failed to delete car. Please try again.");
      }
    }
  };

  return (
    <article className="car-full-details">
      <header className="car-header">
        <img src={car.image} alt={car.name} className="car-image" />
        <h1>{car.name}</h1>
      </header>
      <div className="details-content">
        <div className="car-details-price">
          <p className="price">${car.price.toLocaleString()}</p>
        </div>
        <div className="car-details-color">
          <p><strong>Exterior Color:</strong> {car.color}</p>
        </div>
        <div className="action-buttons">
          <button onClick={() => navigate(`/edit/${car.id}`)} className="edit-button">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default CarDetails;
