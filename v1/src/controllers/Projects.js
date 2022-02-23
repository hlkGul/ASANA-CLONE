const { insert } = require("../services/Projects");

const create = (req, res) => {
    insert({ name: "Test Project" })
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
};
const index = (req, res) => {
    res.status(200).send("Project Indexçç");
};

module.exports = {
    create,
};
