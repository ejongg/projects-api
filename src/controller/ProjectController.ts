import { Request, Response } from "express";

import ProjectService from "../service/ProjectService";

export default {
    getAll: async function (req: Request, res: Response) {
        const projects = await ProjectService.getAll();
        return res.json(projects);
    },
    getById: async function (req: Request, res: Response) {
        const { id } = req.params;
        const projects = await ProjectService.getById(id);

        return res.json(projects);
    },
    create: async function (req: Request, res: Response) {
        const project = await ProjectService.create(req.body);
        return res.json(project);
    },
    update: async function (req: Request, res: Response) {
        const { id } = req.params;
        const project = await ProjectService.update(id, req.body);
        return res.json(project);
    },
    delete: async function (req: Request, res: Response) {
        const { id } = req.params;
        const result = await ProjectService.delete(id);

        if (result === 0) {
            return res.status(500).send('Project not found');
        }

        return res.json(result);
    }
};