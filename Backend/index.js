const express = require("express");
const connectDB=require("./db");
const  promptRoutes  = require("./routes/promptroute");
const app = express();
app.use(express.json());
app.use("/api", promptRoutes);

connectDB();
app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});