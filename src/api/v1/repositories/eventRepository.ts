import { db } from "../../../../config/firebaseConfig";
import { Event } from "../models/Event";

const COLLECTION = "events";

export const createEvent = async (event: Event): Promise<Event> => {
  const ref = event.id
    ? db.collection(COLLECTION).doc(event.id)
    : db.collection(COLLECTION).doc(); 

  const eventToSave: Event = {
    ...event,
    id: ref.id, 
  };

  await ref.set(eventToSave);
  return eventToSave;
};

export const getAllEvents = async (): Promise<Event[]> => {
  const snapshot = await db.collection(COLLECTION).get();
  return snapshot.docs.map((doc) => doc.data() as Event);
};

export const getEventById = async (id: string): Promise<Event | null> => {
  const doc = await db.collection(COLLECTION).doc(id).get();
  return doc.exists ? (doc.data() as Event) : null;
};

export const updateEvent = async (
  id: string,
  updates: Partial<Event>
): Promise<Event | null> => {
  const ref = db.collection(COLLECTION).doc(id);
  const doc = await ref.get();

  if (!doc.exists) return null;

  await ref.update(updates);
  const updated = await ref.get();
  return updated.data() as Event;
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  const ref = db.collection(COLLECTION).doc(id);
  const doc = await ref.get();

  if (!doc.exists) return false;

  await ref.delete();
  return true;
};