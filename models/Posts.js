var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  time: Date,
  favorites: {type: Number, default: 0},
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

PostSchema.methods.favorite = function(cb) {
  this.favorites += 1;
  this.save(cb);
};

mongoose.model('Post', PostSchema);