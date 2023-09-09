import { Request, Response } from "express";
import QuestionsModel from "../models/Questions";
import ResponseModel from "../models/Response";

export const ask = (req: Request, res: Response) => {
  res.render("pages/ask");
};

export const savequestion = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  try {
    await QuestionsModel.create({
      title,
      description,
    });
  } catch (err) {
    console.log(`Erro ao salvar pergunta: ${err}`);
  }
};

export const questionId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const question = await QuestionsModel.findOne({ where: { id } });

    if (question !== null) {
      const answers = await ResponseModel.findAll({
        where: { questionId: question.id },
        order: [["id", "DESC"]],
      });

      res.render("pages/question", { question, answers });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Ocorreu um erro durante o processamento da solicitação.");
  }
};
