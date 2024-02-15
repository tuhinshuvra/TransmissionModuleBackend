const mongoose = require("mongoose");
const wifi_connections = new mongoose.Schema({
    division: {
        type: Number,
        required: true,
    },
    district: {
        type: Number,
        required: true,
    },
    union: {
        type: Number,
        required: true,
    },
    village: {
        type: String,
        required: false,
    },
    locationName: {
        type: String,
        required: false,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    responsible: {
        type: String,
        required: true,
    },
    remarks: {
        type: String,
        maxlength: 1000,
        required: false,
    },
    savedTime: {
        type: Date,
        default: Date.now,
    },
    updateDate: {
        type: Date,
        default: "",
    }
}, {
    collection: "wifi_connections",
});

module.exports = mongoose.model("wifi_connections", wifi_connections);