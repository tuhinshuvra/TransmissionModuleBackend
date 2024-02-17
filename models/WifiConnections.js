const mongoose = require("mongoose");
const wifi_connections = new mongoose.Schema({
    type: {
        type: String,
        default: "Point"
    },

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

    coordinates: {
        type: [Number],
        required: true,
        validate: {
            validator: function (value) {
                return Array.isArray(value) && value.length === 2 &&
                    typeof value[0] === 'number' && typeof value[1] === 'number';
            },
            message: props => `${props.value} is not a valid coordinate array.`
        }
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