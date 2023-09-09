import { Request, Response } from "express";
import connection from "../database/database";
import Questions from "../models/Questions";
import ResponseModel from "./../models/Response";

export const home = async (req: Request, res: Response) => {
  const init = async () => {
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso");
      await Questions.sync({ force: false });
      console.log("Tabela questions criada com sucesso ou já existe!");
      await ResponseModel.sync({ force: false });
      console.log("Tabela answers criado com sucesso ou já existe!");
    } catch (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
    }
  };
  init();

  try {
    const questions = await Questions.findAll({
      raw: true,
      order: [["id", "DESC"]],
    });
    res.render("pages/index", { questions });
  } catch (err) {
    console.log(`Erro ao buscar perguntas: ${err}`);
    res.send(500).send("Erro ao buscar perguntas");
  }
};
