import { Router } from "express";

const router = Router();

router.post("/", (_req, res) => {
  res.status(501).json({ message: "not implemented" });
});

export default router;
