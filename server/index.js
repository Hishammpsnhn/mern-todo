import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import post from './Router/router.js'

const app = express();

app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const url = "mongodb+srv://hishammp:Izo6Jci11SdTf8V1@cluster0.pz9wn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{
  useNewUrlParser:true,
 
});
const connection = mongoose.connection;
connection.once('open',()=>{
  console.log("MongoDb datase is connected successfully")
})

app.use('/post',post)


const PORT = process.env.PORT || 7000;
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });



app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})