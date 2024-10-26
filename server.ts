import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const PORT = process.env.SERVER_PORT || "5000";

const setupApp = (): express.Application => {
  const prisma = new PrismaClient();
  const app: express.Application = express();

  app.use(
    cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST", "PATCH"],
      allowedHeaders: ["Content-Type"],
    })
  );

  app.use(express.json());

  app.get("/spacing", async (_req, res) => {
    const data = await prisma.spacing.findMany();
    res.json(data);
  });

  app.get("/spacing/:type", async (req, res) => {
    const { type } = req.params;
    const data = await prisma.spacing.findMany({
      where: {
        type: type,
      },
    });
    res.json(data);
  });

  app.patch("/spacing/:id", async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;
    const param = await prisma.spacing.update({
      where: {
        id: parseInt(id),
      },
      data: {
        value,
      },
    });
    res.json(param);
    try {
    } catch (err) {
      console.log(err);
    }
  });

  return app;
};

const main = async () => {
  const app = setupApp();
  const port = parseInt(PORT);
  app.listen(port, () => {
    console.log(
      `Draftbit Coding Challenge is running at http://localhost:${port}/`
    );
  });
};

main();
