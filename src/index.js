import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error;
        })
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        })
    }).catch((error) => {
        console.log("MONGO DB Connection FAILED !!!", error);
    });