import interiorModel from "../models/interiorModel.js";

const getInteriorById = async (req, res) => {
  const { interior_id } = req.params;
  try {
    const interior = await interiorModel.getInteriorByIdQuery(
      parseInt(interior_id)
    );
    res.status(200).json(interior);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getInteriorById };
