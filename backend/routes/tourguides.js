import express from "express";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createTourGuide,
  deleteTourGuide,
  getAllTourGuide,
  getFeaturedTourGuide,
  getSingleTourGuide,
  getTourGuideBySearch,
  getTourGuideCount,
  updateTourGuide,
} from "../controllers/tourguideController.js";

import filterImage from "../utils/multer.js";
const router = express.Router();

// create new Tourguide
router.post("/", filterImage, createTourGuide);
// update new Tourguide
router.put("/:id", verifyAdmin, updateTourGuide);
// delete new Tourguide
router.delete("/:id", verifyAdmin, deleteTourGuide);
// get single Tourguide
router.get("/:id", getSingleTourGuide);
// get all Tourguide
router.get("/", getAllTourGuide);
// get Tourguide by search
router.get("/search/getTourGuideBySearch", getTourGuideBySearch);
router.get("/search/getFeaturedTourGuide", getFeaturedTourGuide);
router.get("/search/getTourGuideCount", getTourGuideCount);

export default router;
