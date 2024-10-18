import { request } from "../utilities/api";

const URL = "http://localhost:3000/api/cars";

const getAllCars = async () => request(URL);

const getCarById = (id) => request(`${URL}/${id}`);

const createCar = async (car) => request(URL, "POST", car);

const updateCar = async (id, car) => request(`${URL}/${id}`, "PATCH", car);

const deleteCar = async (id) => request(`${URL}/${id}`, "DELETE");

export default { getAllCars, getCarById, createCar, updateCar, deleteCar };
