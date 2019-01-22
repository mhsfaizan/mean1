const router = require('express').Router();

const Gallery = require("../model/gallery");


router.get('/galleries',(req,res)=>{
    Gallery.find((err,galleries)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(galleries);
        }
    })
})


router.post('/gallery',(req,res)=>{
    let img = new Gallery({
        title:req.body.title,
        image:req.body.image,
        description:req.body.description
    })
    img.save((err,gal)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(gal)
        }
    })
    
})

router.delete('/gallery/:id',(req,res)=>{
    Gallery.deleteOne({_id:req.params.id},(err,img)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(img);
        }
    });

})

module.exports = router;