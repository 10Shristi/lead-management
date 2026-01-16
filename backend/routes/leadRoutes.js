
import express from "express";
import { getLeads, getLeadById, getAnalytics } from "../controllers/leadController.js";

const router = express.Router();

router.get("/", getLeads);
router.get("/analytics", getAnalytics);
router.get("/:id", getLeadById);

export default router;
