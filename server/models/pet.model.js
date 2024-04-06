const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 5 characters"] },
    type: { type: String,
        required: [true, "type is required"],
        minlength: [3, "type must be at least 3 characters"]},
    description:{
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be at least 5 characters"]
    },
    skill1: {
        type: String,
        required: [false]
    },
    skill2: {
        type: String,
        required: [false]
    },
    skill3: {
        type: String,
        required: [false]
    }
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;

