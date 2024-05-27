class NewsController{
    async index(req,res){
        res.send('from NewController')
    }

    async show(req,res){
        res.send('We are showing my page')
    }




}

export default NewsController