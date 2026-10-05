// const colors=require('colors');
// console.log( colors.blue("hy this  is my website"));
// console.log(colors.yellow("hy this  is my website"));
// console.log(colors.red("hy this  is my website"));
// console.log(colors.green("hy this  is my website"));
require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get ('/twitter',(req,res)=>{
  res.send("sonam")
})
app.get('/login',(req,res)=>{
res.send("<h1>please login  at first</h1>")
})
app.get('/user',(req,res)=>{
 res.send("welcome back my galaxy")
})

app.listen(process.env.PORT, () => {
  console.log(`example app listening  on port${port}`);
});
