const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
    time: Date,
    text: String,
    done: Boolean
  }
);

const Todo = model('todo', TodoSchema);

module.exports = Todo;