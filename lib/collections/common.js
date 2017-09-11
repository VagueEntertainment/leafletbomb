 
 Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: process.env.PWD + '/media/'})]
});
    
Images.allow({
  insert: function (userId, fileObj) {
    return !! userId;
  },
  update: function (userId, fileObj) {
    return !! userId;
 },
 remove: function (userId, fileObj) {
    return !! userId;
 },
 download: function (userId, fileObj) {
    return true;
 }
 
 
 });
 
Influencers = new Mongo.Collection('influencers');

Influencers.allow ({
    insert:function(userId, doc) {return !! userId;},
    update: function (userId, fileObj) {return !! userId;},
    remove: function (userId, fileObj) {return !! userId;}
           
});
