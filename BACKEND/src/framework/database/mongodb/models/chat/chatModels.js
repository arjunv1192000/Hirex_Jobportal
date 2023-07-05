import { Schema, model } from "mongoose";

const chatSchema = new Schema({
    members: {
        type: Array,
      }, 

},
{ timestamps: true }
)
const chatdata = model("chats", chatSchema);
export default chatdata;