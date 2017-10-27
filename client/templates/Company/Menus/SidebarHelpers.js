Template.companyMenu.helpers({


         companyName:function() {
                       if(Company.find().count() === 0) {
                            Router.go("/marketerSetup/"+Meteor.userId());
                            console.log("setup needed");
                            }
                    return Company.findOne().companyName;
            }, 

    postlist:function() {    
        return Posts.find({status:2}, {sort:{releasedate: -1 , docId:-1}});
        },
  


});


Template.companyMenu.events({

    'click #SettingListItem' : function(e) {
                              $("#dashboard_CompanyConfig").css("visibility", "visible");
                              $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
                              $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");   
          
                    },   
                    
   'click ': function() {
                       Router.go("/"+Company.findOne().companyName+"?pr="+this.docId);

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






