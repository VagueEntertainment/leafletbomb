Template.profiles.helpers ({
            
    company: function() {
                var userid = Meteor.users.findOne()._id;
                   // Meteor.subscribe('companies',userid);
                   if(Company.find().count() === 0) {
                      Router.go('/setup/'+userid);
                                
                    } else if (Company.findOne().accountType == "marketer") {
                        Router.go('/dashboard/'+userid);
                        
                    }
                                    
               
    }




});
