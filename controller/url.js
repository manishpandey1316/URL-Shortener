const URL = require('../model/url').Url
 ShortUrl=()=>
{
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = 7;
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random()*characters.length);
      result += characters.charAt(randomIndex);
    }

    return result
}
         
exports.getShortURL = async (req,res)=>
{
    try
    {
       const doc = await URL.findOne(req.body)
       if(!doc)
       {  
            let isUnique=false;
            while(!isUnique)
            { 
                    let result = ShortUrl()
                    let doc = await URL.findOne({ShortUrl:result})
                    if(!doc)
                    {  
                        const url = new URL({...req.body,"ShortUrl":result})
                        let doc = await url.save()
                        isUnique=true;   
                        res.render('url',{ShortUrl:doc.ShortUrl})   
                    } 
                
                
            }
       }
       else{
          res.render('url',{ShortUrl:doc.ShortUrl}) 
       } 
    
    } 
    catch(err)
    {
       res.status(401).json(err)
    }
   
}           
        
        


exports.getLongURL = async (req,res)=>
{
    try
    {
        const doc = await URL.findOne({ShortUrl:req.params.id})
        if(doc)
        {
            res.redirect(doc.LongUrl)
        }
        else{
            res.json(301)
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}

exports.home = (req,res)=>
{
   try{
      res.render('url',{ShortUrl:null})
   }
   catch(err)
   {
    res.status(401)
   }
}