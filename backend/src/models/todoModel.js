
'use strict';

const { Schema, model } = require("mongoose");


const TodoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 200
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 200
    },
    priority: {
      type: String,
      enum: {
        values: ["low", "medium", "low"],
        message: "priority must be low, medium or high",
      },
      default: "medium"
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: "todos",
    timestamps: true
  },
);

const Todo = model('Todo', TodoSchema)

module.exports = Todo