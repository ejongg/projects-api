import sequelize from '../database';
import * as Sequelize from 'sequelize';

let Project = sequelize.define('projects', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.BOOLEAN
    }
});

Project.sync();

export default Project;