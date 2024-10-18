import roofModel from "../models/roofModel.js";

const getRoofById = async (req, res) => {
  const { roof_id } = req.params;
  try {
    const roof = await roofModel.getRoofByIdQuery(parseInt(roof_id));
    res.status(200).json(roof);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getRoofById };
