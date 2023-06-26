import express from "express";
import { createReview } from "../controllers/reviewController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:homestayId", createReview);
router.post("/:tourguideId", createReview);

export default router;
