const mongoose = require('mongoose')

main().catch((err)=>
{
    console.log(err)
})

async function main()
{
   await mongoose.connect('mongodb://localhost:27017/URL')
}

const urlSchema = mongoose.Schema({
    
        LongUrl:{type:String,required:true},
        ShortUrl:{type:String,required:true}
    
})

const model=mongoose.model('url',urlSchema)
exports.Url = model