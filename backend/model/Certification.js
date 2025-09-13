import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: { type: String, required: true },
  issued: { type: String, required: true },
  imageUrl: { type: String, required: true },
  credentialUrl: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Certification", certificationSchema);
