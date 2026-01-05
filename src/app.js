import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost/3000",
  })
);

app.use(cookieParser());
app.use(
  express.urlencoded({
    limit: "16kb",
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

export default app;
