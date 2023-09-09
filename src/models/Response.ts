import { Model, DataTypes } from "sequelize";
import connection from "../database/database";

interface ResponseInteface extends Model {
  body: string;
  questionId: string;
}

const ResponseModel = connection.define<ResponseInteface>("answers", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ResponseModel;
