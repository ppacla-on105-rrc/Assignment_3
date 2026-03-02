import { Router } from "express";
import { createEventSchema } from "../validation/eventValidation";
import { validate } from "../middleware/validate";
import {
  createEventHandler,
  getAllEventsHandler,
  getEventByIdHandler,
  updateEventHandler,
  deleteEventHandler
} from "../controllers/eventController";

const router = Router();

router.post("/", validate(createEventSchema), createEventHandler);
router.get("/", getAllEventsHandler);
router.get("/:id", getEventByIdHandler);
router.put("/:id", updateEventHandler);
router.delete("/:id", deleteEventHandler);

export default router;