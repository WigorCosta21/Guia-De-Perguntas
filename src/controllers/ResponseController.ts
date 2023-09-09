import { Request, Response } from "express";
import ResponseModel from "../models/Response";

export const respond = async (req: Request, res: Response) => {
  const { body, questionId } = req.body;

  try {
    await ResponseModel.create({ body, questionId });
    res.redirect(`/question/${questionId}`);
  } catch (err) {
    console.error(`Erro ao salvar pergunta: ${err}`);
  }
};
