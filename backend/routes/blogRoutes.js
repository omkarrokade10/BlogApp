const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

router.post('/',async(req,res)=>{
    const blog=new Blog(req.body);
    await blog.save();
    res.json(blog);
});

router.delete('/:id',async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    res.json({Message:'Deleted successfully'});
});

module.exports=router;
