import { Router } from "express";
import { createEventSchema } from "../validation/eventValidation";
import { validate } from "../middleware/validate";

const router = Router();

router.post("/", validate(createEventSchema), (req, res) => {
  res.status(201).json({
    message: "Event created",
    data: req.body
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Events retrieved",
    count: 0,
    data: []
  });
});

export default router;