import { Request, Response } from "express";
import * as eventService from "../services/eventService";

export const createEventHandler = async (req: Request, res: Response) => {
  const createdEvent = await eventService.createEvent(req.body);

  res.status(201).json({
    message: "Event created",
    data: createdEvent,
  });
};

export const getAllEventsHandler = async (req: Request, res: Response) => {
  const events = await eventService.getAllEvents();

  res.status(200).json({
    message: "Events retrieved",
    count: events.length,
    data: events,
  });
};