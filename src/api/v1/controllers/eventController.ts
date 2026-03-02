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

 export const getEventByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const event = await eventService.getEventById(id);

  if (!event) {
    res.status(404).json({ message: "Event not found" });
    return;
  }

  res.status(200).json({
    message: "Event retrieved",
    data: event,
  });
};

 export const updateEventHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updated = await eventService.updateEvent(id, req.body);

  if (!updated) {
    res.status(404).json({ message: "Event not found" });
    return;
  }

  res.status(200).json({
    message: "Event updated",
    data: updated,
  });
};

 export const deleteEventHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await eventService.deleteEvent(id);

  if (!deleted) {
    res.status(404).json({ message: "Event not found" });
    return;
  }

  res.status(200).json({ message: "Event deleted" });
};