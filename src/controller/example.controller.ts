import { Request, Response } from 'express'
import logger from '../utils/logger';
export function createExampleHandler(req: Request, res: Response) {
    try {
        // const example = //call create example service
    } catch (e) {
        logger.error(e);
        return res.status(409);
    }
}