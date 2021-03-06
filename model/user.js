const Sequelize = require('sequelize');
const config = require('../config');


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port:config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

let User = sequelize.define('user', {
    eid: {
        type: Sequelize.STRING(30),
        primaryKey: true
    },
    password: Sequelize.STRING(20),
    cname:Sequelize.STRING(255),
    cadd: Sequelize.STRING(255),
    cpro: Sequelize.STRING(255)
}, {
    timestamps: false
});

let Job = sequelize.define('job', {
    jid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    title:Sequelize.STRING(255),
    company: Sequelize.STRING(255),
    jobdesc: Sequelize.STRING(255),
    proposal:Sequelize.STRING(255),
    deadline:Sequelize.STRING(255),
    position:Sequelize.STRING(255),
    nature:Sequelize.STRING(255),
    tags:Sequelize.STRING(255),
    workplace:Sequelize.STRING(255),
    publish:Sequelize.STRING(1),
}, {
    timestamps: false
});

User.hasMany(Job);
Job.belongsTo(User);

module.exports = {User,Job};