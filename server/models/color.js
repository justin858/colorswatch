var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var ColorSchema = new Schema({
    name: String,
    shades: [
     {
       name: Number,
       hex: String
     }
    ],
    accents: [
     {
       name: Number,
       hex: String
     }
    ]
});
// define model
var Color = mongoose.model('Color', ColorSchema );

module.exports = Color;
