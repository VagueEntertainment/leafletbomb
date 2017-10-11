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
                    return Posts.find({userId: Company.findOne()._id, status:0 }).count();
                },
                
        scheduleCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:1 }).count();
                },
                
        publishCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:2 }).count();
                },                




});


Template.dashboardMenu.events({


    'click #releaseAdd': function() {
    
                            var id = Company.findOne().userId;
                            Router.go('/dashboard/'+id+'/newPressRelease');
                        },


    'click #SettingListItem' : function(e) {
                              $("#dashboard_CompanyConfig").css("visibility", "visible");
                              $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
                              $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");   
          
                    },     



});


Template.settingsMenu.events({


    'click #DashBoard' : function(e) {
                              $("#dashboard_CompanyConfig").css("visibility", "visible");
                              $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
                              //$('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");  
                              
                               $("#dashboard_ThemeConfig").css("visibility", "hidden");
                               $("#dashboard_UpgradeConfig").css("visibility", "hidden");
                               $("#dashboard_BackendConfig").css("visibility", "hidden");
                                $("#dashboard_PluginsConfig").css("visibility", "hidden");
                                 $("#dashboard_PressConfig").css("visibility", "hidden");
          
                    },
                    
     'click #Theme' : function(e) {
                              $("#dashboard_ThemeConfig").css("visibility", "visible");
                              $("#dashboard_ThemeConfig").css("animation-name" , "slideInAnim");
                            //  $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible"); 
                              
                               $("#dashboard_CompanyConfig").css("visibility", "hidden");
                               $("#dashboard_UpgradeConfig").css("visibility", "hidden");
                               $("#dashboard_BackendConfig").css("visibility", "hidden");
                                $("#dashboard_PluginsConfig").css("visibility", "hidden");
                                 $("#dashboard_PressConfig").css("visibility", "hidden");  
          
                    },
                    
     'click #Upgrade' : function(e) {
                              $("#dashboard_UpgradeConfig").css("visibility", "visible");
                              $("#dashboard_UpgradeConfig").css("animation-name" , "slideInAnim");
                            //  $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");   
                              
                               $("#dashboard_ThemeConfig").css("visibility", "hidden");
                               $("#dashboard_CompanyConfig").css("visibility", "hidden");
                               $("#dashboard_BackendConfig").css("visibility", "hidden");
                                $("#dashboard_PluginsConfig").css("visibility", "hidden");
                                 $("#dashboard_PressConfig").css("visibility", "hidden");
          
                    },  
                    
    'click #Backend' : function(e) {
                              $("#dashboard_BackendConfig").css("visibility", "visible");
                              $("#dashboard_BackendConfig").css("animation-name" , "slideInAnim");
                            //  $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible"); 
                              
                               $("#dashboard_ThemeConfig").css("visibility", "hidden");
                               $("#dashboard_UpgradeConfig").css("visibility", "hidden");
                               $("#dashboard_CompanyConfig").css("visibility", "hidden");
                                $("#dashboard_PluginsConfig").css("visibility", "hidden");
                                 $("#dashboard_PressConfig").css("visibility", "hidden");  
          
                    },
                    
     'click #Plugin' : function(e) {
                              $("#dashboard_PluginsConfig").css("visibility", "visible");
                              $("#dashboard_PluginsConfig").css("animation-name" , "slideInAnim");
                            //  $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");  
                              
                               $("#dashboard_ThemeConfig").css("visibility", "hidden");
                               $("#dashboard_UpgradeConfig").css("visibility", "hidden");
                               $("#dashboard_BackendConfig").css("visibility", "hidden");
                                $("#dashboard_CompanyConfig").css("visibility", "hidden");
                                 $("#dashboard_PressConfig").css("visibility", "hidden"); 
          
                    },
                    
     'click #LeafletPress' : function(e) {
                              $("#dashboard_PressConfig").css("visibility", "visible");
                              $("#dashboard_PressConfig").css("animation-name" , "slideInAnim");
                            //  $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible");   
                              
                               $("#dashboard_ThemeConfig").css("visibility", "hidden");
                               $("#dashboard_UpgradeConfig").css("visibility", "hidden");
                               $("#dashboard_BackendConfig").css("visibility", "hidden");
                                $("#dashboard_PluginsConfig").css("visibility", "hidden");
                                 $("#dashboard_CompanyConfig").css("visibility", "hidden");
          
                    },  
                    
       'click #backbutton' : function(e) {
                                if($("#dashboard_CompanyConfig").css("visibility") == "hidden") { 
                              $("#dashboard_CompanyConfig").css("visibility", "visible");
                              $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
                              $('#SettingsSidebar').css("visibility", "visible"); 
                              } else { 
                               $('#SettingsSidebar').css("visibility", "hidden"); 
                                $("#dashboard_CompanyConfig").css("visibility", "hidden");
                                $('#DashboardSidebar').css("visibility", "visible");
                              }  
                              
                               $("#dashboard_ThemeConfig").css("visibility", "hidden");
                               $("#dashboard_UpgradeConfig").css("visibility", "hidden");
                               $("#dashboard_BackendConfig").css("visibility", "hidden");
                                $("#dashboard_PluginsConfig").css("visibility", "hidden");
                                
                                $("#dashboard_PressConfig").css("visibility", "hidden");
          
                    },                                                     



});

