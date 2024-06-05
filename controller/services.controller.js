const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("services");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retreiving resources: ${err}`);
    }
};

// const resourceServices = async (req, res) => {
//     try {
//         const serviceFound = await knex("services")
//         .where({ id: req.params.id });

//         if (serviceFound === 0) {
//             return res.status(404).json({
//                 message: `Resource with ID ${req.params.id} not found`
//             });
//         }
//         const serviceData = serviceFound[0];
//         res.status(200).json(serviceData);
//     } catch (err) {
//         return res.status(500).json({
//             message: `Unable to retrieve services for resource with ID ${req.params.id}`,
//         });
//     }
// };

module.exports = {
    index
}