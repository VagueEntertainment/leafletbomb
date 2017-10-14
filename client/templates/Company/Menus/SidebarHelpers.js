Template.companyMenu.helpers({


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
                    return Posts.find({userId: Company.findOne()._id, status:0 }).count();
                },
                
        scheduleCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:1 }).count();
                },
                
        publishCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:2 }).count();
                },                




});


Template.companyMenu.events({


    'click #releaseAdd': function() {
                             var theid = Company.findOne().userId;
                                var d = new Date();
                                  var docs = Company.findOne()._id+"_"+d.getTime();
                                  
                            Router.go('/dashboard/'+theid+'/newPressRelease?new='+theid+"_"+docs);
                        },


    'click #SettingListItem' : function(e) {
                              $("#dashboard_CompanyConfig").css("visibility", "visible");
                              $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
                              $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");   
          
                    },     



});




