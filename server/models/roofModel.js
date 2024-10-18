import { pool } from "../config/database.js";

const getRoofByIdQuery = async (id) => {
  try {
    const getRoofByIdQuery = "SELECT * FROM roofs WHERE id = $1";
    const results = await pool.query(getRoofByIdQuery, [parseInt(id)]);
    return results.rows[0];
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to retrieve roof with id: ${id}`);
  }
};

export default { getRoofByIdQuery };
