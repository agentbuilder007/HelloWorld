import express from "express";
import extractRouter from "./routes/extract";

const app = express();

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/extract", extractRouter);

export default app;
