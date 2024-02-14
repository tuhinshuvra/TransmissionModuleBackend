const app = require('./app');
const config = require("./config/config");

const PORT = config.app.port || 5000;
app.listen(PORT, () => {
    console.log(`Transmission Module Server site is running on port ${PORT}`)
})