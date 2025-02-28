// import mongoose from "mongoose";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
	path: './env'
})

connectDB()

.then((result) => {
	app.listen(process.env.PORT || 8000, ()=>{
		console.log(`server is running at port : ${process.env.PORT}`)
	});
}).catch((err) => {
	console.log("Mongo Db Connection failed !!", err);
});


//First Approach
// import express from "express"
// const app  = express()
// (async () => {  //IIFE (Immediately Invoked Function Expression)
// 	try {
// 		await mongoose.connect(`${process.env.MONGODB_URI}`)
// 		app.on("error", (error) => {
// 			console.log("Error", error);
// 			throw error
// 		})

// 		app.listen(process.env.PORT, ()=>{
// 			console.log(`App is listening on port ${process.env.PORT}`);
// 		})

// 	} catch (error) {
// 		// console.log("Error", error);
// 		console.error("Error", error);
// 		throw error
// 	}
// })()
