const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { connectToDb, getDb } = require("./database/database");
const OrderModel = require ("./Models/Order");
const nodemailer = require("nodemailer");


const app = express();
app.use(express.json());
dotenv.config();
app.set("view engine", "ejs");
app.use(cors());
const http = require("http");
const server = http.createServer(app);


const PORT = process.env.PORT || 8000;
connectToDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log("Listening to server");
    });
  }
  let database = getDb();
});
app.post('/cart',async(req,res)=>{
  const {order,phone,city}=req.body;
   OrderModel.create({
    order:order,
    phone:phone,
    city:city
  })
  const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "sarl.momacob@gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });
  const mailOptions={
    from: {
      name:'New Client',
      address:process.env.USER
    }, // sender address
      to: "sarl.momacob@gmail.com", // list of receivers
      subject: `NEW ORDER from ${phone}`, // Subject line
      text: `Vous avez recu une nouvelle commande:${order},${city}
      appeler ${phone} pour confirmer avec le client `, // plain text body
      
  }
  transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
      
      res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent:'+info.response);
  });
});

app.get('/cart',async(req,res)=>{
  try{
    const data=await
    OrderModel.find();
    res.json(data);
  }catch (error){
    res.status(500).json({message:error.message})
  }; 
});

