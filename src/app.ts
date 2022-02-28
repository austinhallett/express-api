import express, {
    Express, 
    Request,
    Response, 
    NextFunction} from "express";
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from "./routes";


const port = config.get<number>('port');
const app = express();

app.use(express.json())

app.listen(port, async () => {
    logger.info(`Server running on port http://localhost:${port}`);
    await connect();
    routes(app);
})

app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`[${req.method}] ${req.url} ${res.statusCode}`);
    next();
});