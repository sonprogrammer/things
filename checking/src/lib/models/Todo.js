import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    }
})

const TodoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
    },
    tasks: [TaskSchema]
},{
    timestamps: true
})


const Todo = mongoose.model('Todo', TodoSchema)
export default Todo