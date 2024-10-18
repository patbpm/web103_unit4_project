import { request } from "../utilities/api";

const fetchExteriorById = (id) =>
  request(`http://localhost:3000/api/exteriors/${id}`);

const fetchInteriorById = (id) =>
  request(`http://localhost:3000/api/interiors/${id}`);

export default { fetchExteriorById };
