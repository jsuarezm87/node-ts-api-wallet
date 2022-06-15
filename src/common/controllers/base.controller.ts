import { Response } from 'express';
import { ApplicationException } from '../exeptions/application.exception';

export abstract class BaseController {

    handleException(err: any, res: Response) {

        if (err instanceof ApplicationException) {
            res.status(400).send(err.message);
        } else {
            throw new Error(err);
        }
    }
}