const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .catch((err) => console.error(err));

  console.log(`MongoDB Connected: ${connection.connection.host}`.blue.bold);
};

module.exports = connectDB;
