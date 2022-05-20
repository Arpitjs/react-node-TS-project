import express, { Express } from "express";
import compression from "compression";
import cors from "cors";
import routes from "./api/routes";
import dotenv from 'dotenv';

const app: Express = express();
const port: number = process.env.PORT || 3001;

dotenv.config({ path: './.env' });

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/", routes);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
