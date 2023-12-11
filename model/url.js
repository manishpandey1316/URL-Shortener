const mongoose = require('mongoose')




const urlSchema = mongoose.Schema({
    
        LongUrl:{type:String,required:true},
        ShortUrl:{type:String,required:true}
    
})

const model=mongoose.model('url',urlSchema)
exports.Url = model