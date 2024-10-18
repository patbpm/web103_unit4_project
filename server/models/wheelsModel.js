import { pool } from "../config/database.js";

const getWheelsByIdQuery = async (id) => {
  try {
    const getWheelsByIdQuery = "SELECT * FROM wheels WHERE id = $1";
    const results = await pool.query(getWheelsByIdQuery, [parseInt(id)]);
    return results.rows[0];
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to retrieve wheels with id: ${id}`);
  }
};

export default { getWheelsByIdQuery };
