const Project = require("../models/Projects");
const insert = (projectData) => {
    //create
    const projects = new Project(projectData);
    return projects.save();
};
module.exports = {
    insert,
};
