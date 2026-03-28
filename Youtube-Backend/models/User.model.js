import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true,
    unique: true
  },
  password: {
    type:String,
    required:true
  }, 
  image_url: {
    type: String,
    default: ""
  }


    // reference to channel
    //   channel: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Channel"
    //   }
});

const userModel = mongoose.model("User", userSchema);
export default userModel;