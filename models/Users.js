import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);
usersSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.Users || mongoose.model("Users", usersSchema);
