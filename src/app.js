import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// Allow only your specific origins, to access and use your server
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
// Allow to accept request in JSON format with limit 16kb
app.use(express.json({ limit: "16kb" }));
// Allow to accept request in URL params with extended (means allow nested object/json) and limit 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// If we will get any static files (HTML, pdf and xml etc.), to store in our server
app.use(express.static("public"));
//From server can access and set cookies in user's browser, based on that, we can perform crud operations
app.use(cookieParser);




export { app };