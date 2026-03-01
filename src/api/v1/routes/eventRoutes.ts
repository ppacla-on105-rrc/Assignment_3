import { Router } from "express";
import { createEventSchema } from "../validation/eventValidation";
import { validate } from "../middleware/validate";
import { createEventHandler } from "../controllers/eventController";

const router = Router();

router.post("/", validate(createEventSchema), createEventHandler);

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Events retrieved",
    count: 0,
    data: []
  });
});

export default router;