const knex = require("knex")(require("../knexfile"));

const index = async(_req, res) => {
    try {
        const data = await knex("resource")
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retreiving resources: ${err}`)
    }
};

const findResource = async (req, res) => {
    try {
        const resourceFound = await knex("resource")

        if (resourceFound === 0) {
            return res.status(404).json({
                message: `Resource with ID ${req.params.id} not found`
            });
        }
        const resourceData = resourceFound[0];
        res.status(200).json(resourceData);
    } catch(err) {
        return res.status(500).json({
            message: `Unable to retrieve resource with ID ${req.params.id}`,
        });
    }
};

const findServices = async (req, res) => {
    try {
        const resourceData = await knex
            .select(
                "services.id",
                "services.service_type"
            )
            .from("resource")
            .join("services", "services.resource_id", "resource.id")
            .where( {resource_id: req.params.id} );
        
        if (resourceData.length === 0) {
            return res.status(404).json({
                message: `Resource with ID ${req.params.id} not found`
            });
        }
        res.status(200).json(resourceData);
    } catch (err) {
        return res.status(500).json({
            message: `Unable to retrieve services data for resource with ID ${req.params.id}`,
        });
    }
}

module.exports = {
    index,
    findResource,
    findServices
}