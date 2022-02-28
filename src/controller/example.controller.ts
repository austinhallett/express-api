import { Request, Response } from 'express'
import logger from '../utils/logger';
import { createExample } from '../service/example.service';
import { CreateExampleInput } from '../schema/example.schema';

export async function createExampleHandler(
    req: Request<{}, {}, CreateExampleInput["body"]>,
    res: Response
) {

    const product = await createExample({ ...req.body })
    return res.send(product);
}