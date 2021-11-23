import {Router} from "express";
import Post from "./post.js";

const router = new Router();

router.post("/posts",async (req, res) => {
    try {
        const {name, price, about} = req.body
        const post = await Post.create({name,price,about})
        res.status(200).json(post)
    } catch (e){
        res.status(500).json(e)
    }

});
router.get("/posts", async (req, res) => {
try {
    const posts = await  Post.find();
    return res.json(posts)
}catch (e) {
    res.status(500).json(e)
}
});

router.get("/posts/:id", async (req, res) => {
    try {
        const  {id} = req.params
        if (!id){
            res.status(400).json({message: "no Id"})
        }
        const  post = await Post.findById(id);
        return res.json(post)
    }catch (e) {
        res.status(500).json(e)
    }
});

router.put("/posts", async (req, res) => {
    try {
        const post = req.body
        if (!post._id){
            res.status(400).json({message: "no Id"})
        }
        const updatedPost =  await Post.findByIdAndUpdate(post._id, post, {new:true})
        return res.json(updatedPost)
    }catch (e) {
        res.status(500).json(e)
    }
});

router.delete("/posts/:id", async (req, res) => {
    try {
        const {id} =req.params;
        if (!id){
            res.status(400).json({message: "no Id"})
        }
        const post = await Post.findByIdAndDelete(id)
        return res.json(post)
    }catch (e) {
        res.status(500).json(e)
    }
});

export default router;