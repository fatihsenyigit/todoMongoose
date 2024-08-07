
'use strict';

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
    console.log(data)
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
    const data = await Todo.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      isError: false,
      data,
    });
  },

  delete: async (req, res) => {
    const data = await Todo.deleteOne({ _id: req.params.id });
    res.status(204).send({
      error: false,
      resuld: data,
    });
  },
};

