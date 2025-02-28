import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
	origin: process.env.CORS_ORIGIN, //frontend me kis kis jagah se request accept kar ra hu 
	credentials: true,
}))

//JSON data ko accept kar rha hu , lekin ek limit ke saath.
app.use(express.json({limit: "16kb"}))

//data comes from URL
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//use for store file folder (pdf,img) at public folder 
app.use(express.static("public"))

app.use(cookieParser())
export default app
