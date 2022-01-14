import mongoose from "mongoose";
const PostSchema = new mongoose.Schema({
    title : {type : String, required : true},
    body : {type : String, required : true}
},
{ 
    timestamps: true,
    versionKey: false 
})

export default model = mongoose.models.Post || mongoose.model("Post", PostSchema)