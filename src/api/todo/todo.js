const restful = require('node-restful')
const mongoose = restful.mongoose
const todoSchema = new mongoose.Schema({
    description: { type: String},
    nome: { type: String},
    email: { type: String },
    inputMeg: { type: String },
    errorEmail: { type: String },
    chat: [{
            you:  {type: String, },
            resp: {type: String, }
            }
           ],
    list: [
        {
            Userid: {type: String},
            nome: {type: String, },
            email: {type: String, },
            chat: {type: String, },
            onChat: [{
                        you:  {type: String, },
                        resp: {type: String, }
                    }],
        }
    ],
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)