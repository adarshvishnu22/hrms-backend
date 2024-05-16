const mongoose = require('mongoose');

function connectToMongoDB() {
  const uri = "mongodb+srv://adarsh22sep:<EJSrI6V5slxxI9hx>@cluster0.zfviwdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
}

module.exports = {
  connectToMongoDB
};