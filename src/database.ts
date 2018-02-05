import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('projects-api', 'root', 'root', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    logging: false
});

export default sequelize;