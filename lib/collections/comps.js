Company = new Mongo.Collection('companies');

Company.allow({
    insert:function(userId, doc) { return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
}); 

CompanyAssets = new Mongo.Collection('companyassets');

CompanyAssets.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

DistributionLists = new Mongo.Collection('distrolist');

DistributionLists.allow ({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

CompanyTeam = new Mongo.Collection('team');

CompanyTeam.allow ({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});
