
'use strict';

const CustomError = require('../helper/customError');
const Todo = require('../models/todoModel')

module.exports = {
  list: async (req, res) => {
    const data = await Todo.find({});
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await Todo.create(req.body);
    res.status(201).send({
      error: false,
      result: data
    });
  },

  read: async (req, res) => {
    const data = await Todo.findOne({ _id: req.params.id });
    res.status(200).send({
      isError: false,
      data,
    });
  },

  update: async (req, res) => {
    // const data = await Todo.updateOne({ _id: req.params.id }, req.body);
    // const updatedData = await Todo.findOne({ _id: req.params.id });

    const data = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(202).send({
      isError: false,
      data,
    });
  },

  delete: async (req, res) => {
    const { deletedCount } = await Todo.deleteOne({ _id: req.params.id });

    if (!deletedCount) throw new CustomError('something went wrong!!', 404)

    res.status(204).send({
      isError: false
    });
  },
};

