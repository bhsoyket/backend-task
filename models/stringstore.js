
const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
mongoose.Promise 	= global.Promise;

const stringstoreSchema = new Schema({
	strA: {
		type: String,
		required: 'Please enter a string',
		trim: true
	},
	strB: {
		type: String,
		required: 'Please enter a string',
		trim: true
	}
}, { timestamps: true });

module.exports = mongoose.model('Stringstore', stringstoreSchema);



