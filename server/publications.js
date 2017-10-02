Meteor.publish('posts', function(company) {
                           
                           if (company == undefined) { 
                            return Posts.find({userId: company});
                           } else if(company == "all") {
                            return Posts.find();
                            } else if(company.split("=")[0] == "company") {
                                           var userid= Company.findOne({companyName:company.split("=")[1]}).userId;
                            return Posts.find({userId: userid});
                            } else {
                                 return Posts.find({docId: company.split("=")[1]});   
                            }
                            
                           });
                           
                         
                           
Meteor.publish('companies', function(user) {
                    

                    let query    = {},
                        projection = { limit: 10, sort: { companyName: 1 } };
      
                                  if(user == "all") {
                                        return Company.find();
                                    } else {
                                           let regex = new RegExp( user, 'i' );
                                           query = {
                                                    $or: [
                                                        { userId: regex},
                                                        { companyName: regex },
                                                        { keywords: regex }
                                                        ]
                                                    };
                                           projection.limit = 100;
                                    
                                        return Company.find(query, projection);
                                        
                                        }
                                        }); 
                                        
                              
                                        

Meteor.publish('prteam', function(user) {
                                  return CompanyTeam.find();
                                        }); 
Meteor.publish('distrolist', function(user) {
                                  return DistributionLists.find({userId: user});
                                        });                                                                                
                                        
Meteor.publish("images", function(){return Images.find();});

Meteor.publish("postassets",function(){return PostAssets.find(); });

Meteor.publish("companyassets",function(user){return CompanyAssets.find(); });                
                
Meteor.publish("influencers",function(){return Influencers.find(); });    

Meteor.publish('postdistribution',function(){return PostDistribution.find(); });

Meteor.publish('postquestions',function(){return PostQuestions.find(); });   

Meteor.publish('postfaq',function(){return PostFAQ.find(); });

Meteor.publish('postengagement',function(){return PostEngage.find(); });            
