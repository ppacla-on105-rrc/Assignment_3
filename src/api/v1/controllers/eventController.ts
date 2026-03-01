import { Request, Response } from "express";
import { createEvent, fetchAllEvents } from "../services/eventService";

export const createEventHandler = (req: Request, res: Response) => {
  const event = createEvent(req.body);

  res.status(201).json({
    message: "Event created",
    data: event
  });
};

export const getAllEventsHandler = (req: Request, res: Response) => {
  const events = fetchAllEvents();

  res.status(200).json({
    message: "Events retrieved",
    count: events.length,
    data: events
  });
};