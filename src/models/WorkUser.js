const { Schema, model } = require("mongoose");

const WorkUserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
            
        },
        userEmail: {
            type: String,
            required: true,
            unique: true
        },
        userpassword: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);

module.exports = model("WorkUser", WorkUserSchema);