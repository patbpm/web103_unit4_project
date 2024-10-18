import wheelsModel from "../models/wheelsModel.js";

const getWheelsById = async (req, res) => {
  const { wheels_id } = req.params;
  try {
    const wheels = await wheelsModel.getWheelsByIdQuery(parseInt(wheels_id));
    res.status(200).json(wheels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getWheelsById };
