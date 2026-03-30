import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { generateSwaggerSpec } from "./swaggerOptions";
import fs from "fs";

const setupSwagger = (app: Express): void => {
  const specs = generateSwaggerSpec();

  fs.writeFileSync("./openapi.json", JSON.stringify(specs, null, 2));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;