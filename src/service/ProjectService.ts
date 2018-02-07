import Project from '../model/Project';
import ProjectInterface from '../interface/Project';

export default {
    getAll: function () {
        return Project.findAll();
    },
    getById: function (id: number) {
        return Project.findById(id);
    },
    create: function (project: ProjectInterface) {
        return Project.create(project);
    },
    update: function (id: number, project: ProjectInterface) {
        return new Promise(async function(resolve) {
            const result = await Project.update(project, {where: {id: id}});
            return resolve(Project.findById(id));
        });
    },
    delete: function (id:number) {
        return Project.destroy({
            where: {
                id: id
            }
        })
    }
}