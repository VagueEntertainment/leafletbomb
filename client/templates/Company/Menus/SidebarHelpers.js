Template.companyMenu.helpers({


         companyName:function() {
                       if(Company.find().count() === 0) {
                            Router.go("/marketerSetup/"+Meteor.userId());
                            console.log("setup needed");
                            }
                    return Company.findOne().companyName;
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


Template.PressReleaseItem.helpers({


featuredImage: function() {
                       var featuredfile = "/media/file_placeholder.png"
                     PostAssets.find({docId:this.docId , type:"featured"}).forEach(
                                            function(files){

                                                featuredfile =Images.findOne({_id:files.filename}).url();
                                            
                                            
                                            });
                    return featuredfile;
                }


});




