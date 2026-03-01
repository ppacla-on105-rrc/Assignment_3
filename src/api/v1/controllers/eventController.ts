import { Request, Response } from "express";
import { createEvent } from "../services/eventService";

export const createEventHandler = (req: Request, res: Response) => {
  const event = createEvent(req.body);

  res.status(201).json({
    message: "Event created",
    data: event
  });
};