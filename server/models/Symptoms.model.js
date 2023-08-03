const { Schema, model } = require("mongoose");

const SymptomsSchema = new Schema(
    {
        id: String,
        symptoms: Array,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
);

const Symptoms = model("HistoricalSymptoms", SymptomsSchema);

module.exports = Symptoms;

