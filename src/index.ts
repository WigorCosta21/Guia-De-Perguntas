import express from "express";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use(router);

app.listen(process.env.PORT, () => console.log("App rodando!"));
