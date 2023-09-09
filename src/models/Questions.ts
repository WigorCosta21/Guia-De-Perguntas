import { Model, DataTypes } from "sequelize";
import connection from "../database/database";

interface QuestionsInteface extends Model {
  id: Number;
  title: string;
  description: string;
}

const QuestionsModel = connection.define<QuestionsInteface>("questions", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default QuestionsModel;
