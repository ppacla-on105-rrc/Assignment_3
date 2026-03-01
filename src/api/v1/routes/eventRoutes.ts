import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Events retrieved", count: 0, data: [] });
});

export default router;