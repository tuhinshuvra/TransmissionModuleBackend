const { createNewConnectionService, getAllConnectionService, getAConnectionByIdService, updateConnectionService, deleteConnectionService } = require("../services/wifiConnections.services")

const createNewConnection = async (req, res, next) => {
    try {
        const result = await createNewConnectionService(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully created the Connetion"
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Could not save the Connetion"
        })
    }
}

const getAllConnections = async (req, res, next) => {
    try {
        const Connetion = await getAllConnectionService(req.body);
        res.status(200).json({
            status: "success",
            data: Connetion
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Could not find out Connetions"
        })
    }
}

const getConnectionById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const Connetion = await getAConnectionByIdService(id);

        if (!Connetion) {
            return res.status(400).json({
                status: "fail",
                error: "Could not find the Connetion with the id"
            })
        }

        res.status(200).json({
            status: "success",
            data: Connetion
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Could not find out the Connetion"
        })
    }
}

const updateConnection = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await updateConnectionService(id, req.body);

        console.log(result);

        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "fail",
                error: "Could not update the Connetion with the id"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully updated the Connetion"
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Could not update the Connetion"
        })
    }
}

const deleteConnection = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await deleteConnectionService(id);

        if (!result.deletedCount) {
            return res.status(400).json({
                status: "fail",
                error: "Could not delete the Connection with the id"
            });
        }

        res.status(200).json({
            status: "success",
            message: "Successfully deleted the Connection"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Could not delete the Connection"
        });
    }
};


module.exports = {
    createNewConnection,
    getAllConnections,
    updateConnection,
    getConnectionById,
    deleteConnection
};