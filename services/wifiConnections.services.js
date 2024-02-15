const WifiConnection = require("../models/WifiConnections");

const createNewConnectionService = async (data) => {
    const result = await WifiConnection.create(data);
    return result;
}

const getAllConnectionService = async () => {
    const result = await WifiConnection.find({});
    return result;
}

const getAConnectionByIdService = async (id) => {
    const result = await WifiConnection.findById(id);
    return result;
}

const updateConnectionService = async (id, data) => {
    const result = await WifiConnection.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return result;
}

const deleteConnectionService = async (id) => {
    const result = await WifiConnection.deleteOne({ _id: id });
    return result;
}

module.exports = {
    createNewConnectionService,
    getAllConnectionService,
    getAConnectionByIdService,
    updateConnectionService,
    deleteConnectionService
};