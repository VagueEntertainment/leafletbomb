 
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
 
 Files = new FS.Collection("files", {
  stores: [new FS.Store.FileSystem("files", {path: process.env.PWD + '/media/text/'})]
});
    
Files.allow({
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
