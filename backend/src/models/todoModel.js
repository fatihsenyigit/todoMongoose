
'use strict';

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
},{
    collection: 'todo',
    timestamps: true
})

const Todo = mongoose.model('Todo', TodoSchema)