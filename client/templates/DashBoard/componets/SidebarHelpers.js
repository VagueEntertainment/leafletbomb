Template.dashboardMenu.helpers({


         companyName:function() {
                       if(Company.find().count() === 0) {
                            Router.go("/marketerSetup/"+Meteor.userId());
                            console.log("setup needed");
                            }
                    return Company.findOne().companyName;
            }, 

  teamCounter:function() {
                return 0;
                },                               
            
        draftCounter:function() {
                    return Posts.find({userId: Company.findOne().userId, status:0 }).count();
                },
                
        scheduleCounter:function() {
                    return Posts.find({userId: Company.findOne().userId, status:1 }).count();
                },
                
        publishCounter:function() {
                    return Posts.find({userId: Company.findOne().userId, status:2 }).count();
                },                




});


Template.dashboardMenu.events({


    'click #releaseAdd': function() {
    
                            var id = Company.findOne().userId;
                            Router.go('/dashboard/'+id+'/newPressRelease');
                        }






});
