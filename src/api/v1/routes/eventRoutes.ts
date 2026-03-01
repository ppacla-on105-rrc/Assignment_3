import { Router } from "express";
import { createEventSchema } from "../validation/eventValidation";
import { validate } from "../middleware/validate";
import { createEventHandler, getAllEventsHandler } from "../controllers/eventController";

const router = Router();

router.post("/", validate(createEventSchema), createEventHandler);
router.get("/", getAllEventsHandler);

export default router;