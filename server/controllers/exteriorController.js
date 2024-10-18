import exteriorModel from "../models/exteriorModel.js";

const getExteriorById = async (req, res) => {
  const { exterior_id } = req.params;
  try {
    const exterior = await exteriorModel.getExteriorByIdQuery(
      parseInt(exterior_id)
    );
    res.status(200).json(exterior);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getExteriorById };
