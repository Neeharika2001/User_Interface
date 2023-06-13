//1. import required libraries
const express = require('express');
//Functions for retrieving data within the post model file
const post = require('../models/post');
const router = express.Router();

//2. Generate all routes for interacting with the database
router
  .post('/getpost', async (req, res) => {
    try {
      let fetchpost= await post.getpost(req.body.id);
      res.send(fetchpost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createpost', async (req, res) => {
    try {
      let postcreate = await post.createpost(req.body.id, req.body.postcontent);
      res.send(postcreate)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
  .post('/updatepost', async (req, res) => {
    try {
      let modifypost = await post.updatepost(req.body.id, req.body.postcontent);
      res.send(modifypost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/deletepost', async (req, res) => {
    try {
      let removepost= await post.deletepost(req.body.id);
      res.send(removepost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

//3. Exporting the router for accessing index.js  
module.exports=router;