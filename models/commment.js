const {Schema, model} = require("mongoose");

commentSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    blogId:{
        type:Schema.Types.ObjectId,
        ref:'blog'
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
},{ timestamps: true })

const Comment=model('comment',commentSchema)

module.exports=Comment