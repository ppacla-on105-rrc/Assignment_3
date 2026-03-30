import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           example: abc123
 *         name:
 *           type: string
 *           example: Basketball Tournament
 *         date:
 *           type: string
 *           example: 2026-04-10
 *         location:
 *           type: string
 *           example: Winnipeg
 *     EventInput:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - location
 *       properties:
 *         name:
 *           type: string
 *           example: Basketball Tournament
 *         date:
 *           type: string
 *           example: 2026-04-10
 *         location:
 *           type: string
 *           example: Winnipeg
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Validation error
 *         details:
 *           type: array
 *           items:
 *             type: string
 */

export const createEventSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  location: Joi.string().required(),
});