
import Lead from "../models/Lead.js";

export const getLeads = async (req, res) => {
  const { search = "", stage, page = 1, limit = 10 } = req.query;

  const query = {
    ...(stage && { stage }),
    ...(search && {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } }
      ]
    })
  };

  const leads = await Lead.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Lead.countDocuments(query);
  res.json({ leads, total });
};

export const getLeadById = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  res.json(lead);
};

export const getAnalytics = async (req, res) => {
  const total = await Lead.countDocuments();
  const converted = await Lead.countDocuments({ stage: "Converted" });
  const byStage = await Lead.aggregate([
    { $group: { _id: "$stage", count: { $sum: 1 } } }
  ]);
  res.json({ total, converted, byStage });
};
