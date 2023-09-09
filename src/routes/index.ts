import { Router } from "express";
import { home } from "../controllers/HomeController";
import {
  ask,
  questionId,
  savequestion,
} from "../controllers/QuestionController";

import { respond } from "../controllers/ResponseController";

const router = Router();

router.get("/", home);

router.get("/ask", ask);

router.get("/question/:id", questionId);

router.post("/savequestion", savequestion);

router.post("/respond", respond);

export default router;
