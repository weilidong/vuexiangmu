const uselist= require('./src/data/user.json')
const bodyParse=require('body-parser')
const listdata=require('./src/data/list.json')
module.exports = {
    devServer: {
        open: true,
        before(app) {
            app.post('/usemsg',bodyParse.json(), (req, res) => {
             let {usename,usepwd}=req.body
             let currentobj= uselist.find(v=>v.name===usename);
             if(!currentobj){
                 res.send({code:0,msg:'找不到用户'})
             }else{
                 if(!currentobj.pwd===usepwd){
                     res.send({code:0,msg:'密码不对'})
                 }else{
                     res.send({code:1,msg:'登陆成功',currentobj})
                 }
             }
            }),
            app.get('/getlist',(req,res)=>{
                 res.send(listdata)
            })

        }
    }
}