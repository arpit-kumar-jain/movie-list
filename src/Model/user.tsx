import mongoose from "mongoose";

interface IUser {
    movieName: String;
    rating: Number;
    totalRates:Number;
    timestamps: Boolean;
  }

const User = new mongoose.Schema(
  {
    movieName: String,
    rating:Number,
    totalRates:Number,
    description:String,
    cast:{type:[Number],required:false},
    usersRated:{type:[Number],required:false},
    timestamsp:{type:String,required:false},
  },
  
);

export default mongoose.models.User || mongoose.model("User", User);