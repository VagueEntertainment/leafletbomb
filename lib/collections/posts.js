Posts = new Mongo.Collection('posts');

Posts.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
}); 

PostAssets = new Mongo.Collection('postassets');

PostAssets.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});
       
