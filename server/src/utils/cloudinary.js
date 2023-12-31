import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFile) => {
  try {
    if (!localFile) return "File doesnt exists";

    const response = await cloudinary.uploader.upload(localFile, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFile);
    return response;
  } catch (error) {
    fs.unlinkSync(localFile);
    return null;
  }
};

export default uploadToCloudinary;
