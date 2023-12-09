import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const MONGO_URL =
  "mongodb+srv://amaojohn:RjT7GUEAnwJkIHmw@restapi.gghwjet.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running on http://localhost:8080/");
});
