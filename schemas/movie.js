var mongoose= require('mongoose');
var MovieSchema=new mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	contry: String,
	summary: String,
	flash: String,
	poster: String,
	year: String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		}
	}
})

MovieSchema.pre('save',function(next){
	if (this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}
	else{
		this.meta.updateAt = Date.now()
	}
	next()
})

MovieSchema.statics = {
	fetch: function(cb){
		return $(this)
			.find({})
			.sort('meta.updateAt')
			exec(cb)
	},
	findById: function(){
		return this
			.findOne({_id:id})
			exec(cb)
	}
}
