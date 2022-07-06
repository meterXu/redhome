const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio')
const config = require('../common/config');
router.get('/today',async function (req, res, next) {
    axios.get(config.bing.today).then(c=>{
        if(c&&c.data){
            res.send(c.data.data.url);
        }else{
            res.send(null)
        }
    }).catch(e=>{
        res.send(null)
    })
})

router.get('/rand', function (req, res, next) {
    axios.get(config.bing.random).then(c=>{
        if(c&&c.data){
            res.send(c.data.data.url);
        }else{
            res.send(null)
        }
    }).catch(e=>{
        res.send(null)
    })
})

router.get('/list',async function(req,res,next){
    let dataList = [],length=7;
    try{
        for(let i=0;i<length;i++){
            let res = await axios.get(config.bing.random)
            if(res&&res.data){
                dataList.push(res.data.data.url)
            }
        }
    }
    catch(e){
        console.error(e)
    }
    res.send(dataList)
})

router.get('/webRand',async function(req,res,next){
    const p  = req.query.p||1
    const sizeReg = new RegExp("\\d+x\\d+","gi")
    const newSize = '1920x1080'
    const result =await axios.get(config.bing.web+'?p='+p)
    const $ = cheerio.load(result.data)
    const imgs = $(".card img")
    const resImgs = imgs.map((i,c)=>{
        let src = c.attribs.src
        src = src.replace(sizeReg,newSize)
        return src
    })
    res.json(resImgs.toArray())
})

module.exports=router;
