const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")
const chatRoute = require("./Routes/chatRoute")
const messageRoute = require("./Routes/messageRoute")

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/users",userRoute);

app.use("/api/chats",chatRoute);

app.use("/api/messages",messageRoute);


app.get("/",(req,res) => {
    res.send("Welcome to our chat app APIs...")
})

mongoose.set('strictQuery', false); // Suppress the Mongoose warning

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// Connect to MongoDB with a callback function
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
    } else {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    }
});