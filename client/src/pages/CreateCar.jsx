import React, { useState } from "react";
import "../App.css";

const CreateCar = () => {
  // State for car details
  const [carName, setCarName] = useState("My New Car");
  const [price, setPrice] = useState(65000);
  const [isConvertible, setIsConvertible] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an API to create the new car
    const newCar = {
      name: carName,
      price: price,
      convertible: isConvertible,
    };
    
    console.log("New Car Created:", newCar);
    // Optionally, redirect or reset the form
  };

  return (
    <div className="create-car">
      <form onSubmit={handleSubmit}>
        <label htmlFor="isconvertible">
          <input
            type="checkbox"
            id="isconvertible"
            checked={isConvertible}
            onChange={(e) => setIsConvertible(e.target.checked)}
          />
          Convertible
        </label>

        <div className="create-car-options">
          <div id="customization-options" className="car-options">
            <div className="car-options">
              <button type="button">Exterior</button>
            </div>
            <div className="car-options">
              <button type="button">Roof</button>
            </div>
            <div className="car-options">
              <button type="button">Wheels</button>
            </div>
            <div className="car-options">
              <button type="button">Interior</button>
            </div>
          </div>
        </div>

        <div className="create-car-price">${price.toLocaleString()}</div>
        <div className="create-car-name">
          <input
            type="text"
            id="name"
            name="name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            placeholder="My New Car"
            required
          />
        </div>
        <div className="create-car-price">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <input type="submit" className="create-car-button" value="Create" />
      </form>
    </div>
  );
};

export default CreateCar;
