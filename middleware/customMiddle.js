function customeMidle(req,res,next){
    console.log('Middleware From Custome folder');
    next()
}

module.exports=customeMidle