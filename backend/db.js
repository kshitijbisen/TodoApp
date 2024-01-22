const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://mailticks:mailticks2023@gmailcluster.nk4rv0b.mongodb.net/")
const todoSchema=mongoose.Schema({
    'title':String,
    'description':String,
    "completed":Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo
}
