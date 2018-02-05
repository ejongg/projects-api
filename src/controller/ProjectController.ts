import { Request, Response } from "express";

import ProjectService from "../service/ProjectService";

export default {
    getAll: function (req: Request, res: Response) {
        ProjectService.getAll()
            .then(projects => res.json(projects));
    },
    getById: function (req: Request, res: Response) {
        const { id } = req.params;

        ProjectService.getById(id)
            .then(project => res.json(project));
    },
    create: function (req: Request, res: Response) {
        ProjectService.create(req.body)
            .then(project => res.json(project));
    },
    update: function (req: Request, res: Response) {
        const { id } = req.params;

        ProjectService.update(id, req.body)
            .then(project => res.json(project));
    },
    delete: function (req: Request, res: Response) {
        const { id } = req.params;

        ProjectService.delete(id)
            .then(result => {
                if (result === 0) {
                    return res.status(500).send('Not found');
                }

                res.json(result);
            });
    }
};