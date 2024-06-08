const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("services");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retreiving resources: ${err}`);
    }
};

const findService = async (req, res) => {
    try {
        const serviceType = req.params.serviceType;
        const serviceFound = await knex("services").where("service_type", serviceType);
        
        if (serviceFound.length === 0) {
            return res.status(404).json({
                message: `No services foudn with type ${serviceType}`
            });
        }
        res.status(200).json(serviceFound);
    } catch(err) {
        return res.status(500).json({
            message: `Unable to retrieve services with ID ${req.params.id}`,
        });
    };
};

module.exports = {
    index,
    findService
}