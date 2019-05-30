const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoModel = new Schema(
  {
    name: { type: String },
  },
);

module.exports = mongoose.model('todos', todoModel);
