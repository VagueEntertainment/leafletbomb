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

PostDistribution = new Mongo.Collection('postdistribution');

PostDistribution.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

PostQuestions = new Mongo.Collection('postquestions');

PostDistribution.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

PostFAQ = new Mongo.Collection('postfaq');

PostDistribution.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});
       
