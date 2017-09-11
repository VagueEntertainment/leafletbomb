Meteor.publish('posts', function(company) {

                            if(company == "all") {
                            return Posts.find();
                            } else {
                            return Posts.find({userId: company});
                            }
                           });
Meteor.publish('companies', function(user) {
                                  if(user == "all") {
                                        return Company.find();
                                    } else {
                                        return Company.find({userId: user});}
                                        });

Meteor.publish('team', function(user) {
                                  return CompanyTeam.find({userId: user});
                                        }); 
Meteor.publish('distrolist', function(user) {
                                  return DistributionLists.find({userId: user});
                                        });                                                                                
                                        
Meteor.publish("images", function(){return Images.find();});

Meteor.publish("postassets",function(){return PostAssets.find(); });

Meteor.publish("companyassets",function(){return CompanyAssets.find(); });                
                
Meteor.publish("influencers",function(){return Influencers.find(); });                 
