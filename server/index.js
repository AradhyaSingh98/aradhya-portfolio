const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/messages", messageRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Aradhya Portfolio API is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});