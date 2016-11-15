var express=require('express');//加载模块
var path=require('path');//
//创建数据库模型
//var mongoose= require('mongoose');

//加载模型
//var Movie =	require('./models/movie');
var port=process.env.PORT || 3000;//设置端口，process是一个全局变量
var app=express();//启动一个web服务器

//mongoose.connect('mongodb:localhost/windDemo1');
//设置模板路径
app.set('views','./views/pages');
app.set('view engine','pug');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//提交表单时格式化数组

app.use(express.static(path.join(__dirname,'bower_components')));//设置静态资源路径,用bower下载的组件，dirname为当前目录
app.listen(port);//监听端口

console.log('wind stared on port: '+ port);

//路由设置：
//index pug
app.get('/',function(req,res){
	res.render('index',{
	title:'hellowind 首页',
	movies: [{
                title: '机械战警',
                _id: 1,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 2,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 3,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 4,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 5,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 6,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }]
	})
	
})

//detail pug
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'hellowind',
		movie: {
            doctor: '何塞·帕迪里亚',
            country: '美国',
            title: '机械战警',
            year: '2014',
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: '《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。'
        }
	});		
})

//admin post movie
app.post('/admin/movie/new',function(){
	var id= req.body.movie._id;
	var movieObj=req.body.movie
	var _movie;
	
})

//admin pug
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'hellowind 后台录入页',
		movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
	});
})

//index pug
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'hellowind 列表页',
		movies: [{
            title: '机械战警',
            _id: 1,
            doctor: '何塞·帕迪里亚',
            country: '美国',
            year: 2014,
            language: '英语',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: '《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。'
        }]
	});
})
