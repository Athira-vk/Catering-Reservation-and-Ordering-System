import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://athiravk:12345@cluster0.q62skss.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
