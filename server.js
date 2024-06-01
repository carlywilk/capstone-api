const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const resourcesRoutes = require("./routes/resources_route");
app.use("/api/resources", resourcesRoutes);

const servicesRoutes = require("./routes/services_route");
app.use("/api/services", servicesRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});