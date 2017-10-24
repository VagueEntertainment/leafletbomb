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


PostFAQ = new Mongo.Collection('postfaq');

PostFAQ.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

PostEngage = new Mongo.Collection('postengagement');

PostEngage.allow({
    insert:function(userId,doc) {return !! userId;},
     update:function(doc) {return true;},
     remove:function(userId,doc) {return !! userId;}
           
});


PostQuestions = new Mongo.Collection('postquestions');

PostQuestions.allow({
    insert:function(userId,doc) {return !! userId;},
     update:function(doc) {return true;},
     remove:function(userId,doc) {return !! userId;}
           
});

PostAnswers = new Mongo.Collection('postanswers');

PostAnswers.allow({
    insert:function(userId,doc) {return !! userId;},
     update:function(doc) {return true;},
     remove:function(userId,doc) {return !! userId;}
           
});
       
