import * as express from "express";

import { Request, Response, Application } from "express";

import ProjectController from "./controller/ProjectController";

export function routes (app: Application) {
    const router = express.Router();

    router.route('/projects')
        .get(ProjectController.getAll)
        .post(ProjectController.create);

    router.route('/projects/:id')
        .get(ProjectController.getById)
        .put(ProjectController.update)
        .delete(ProjectController.delete)

    app.use(router);
}