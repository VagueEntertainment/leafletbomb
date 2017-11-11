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
            
        pr_draftCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:0 , type:"pr"}).count();
                },
                
        pr_draftCount: function() {
                    if(Posts.find({userId: Company.findOne()._id, status:0 , type:"pr"}).count() != 0) {
                        return "visible";
                    } else {
                        return "hidden";
                    }
                },        
                
        pr_scheduleCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:1 , type:"pr"}).count();
                },
         pr_schedCount: function() {
                    if(Posts.find({userId: Company.findOne()._id, status:1 , type:"pr"}).count() != 0) {
                        return "visible";
                    } else {
                        return "hidden";
                    }
                },          
                
                
                
        pr_publishCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:2 , type:"pr"}).count();
                },  
                
         pr_pubCount: function() {
                    if(Posts.find({userId: Company.findOne()._id, status:2 , type:"pr"}).count() != 0) {
                        return "visible";
                    } else {
                        return "hidden";
                    }
                },          
                              
        nl_draftCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:0, type:"nl" }).count();
                },
                
        nl_draftCount: function() {
                    if(Posts.find({userId: Company.findOne()._id, status:0, type:"nl" }).count() != 0) {
                        return "visible";
                    } else {
                        return "hidden";
                    }
                },        
                
        nl_scheduleCounter:function() {
                    return Posts.find({userId: Company.findOne()._id, status:1, type:"nl" }).count();
                },
         nl_schedCount: function() {
                    if(Posts.find({userId: Company.findOne()._id, status:1, type:"nl" }).count() != 0) {
                        return "visible";
                    } else {
                        return "hidden";
                    }
                },          
                
                
                
         nl_publishCounter:function() {
                  return Posts.find({userId: Company.findOne()._id, status:2, type:"nl" }).count();
                },  
                
         nl_pubCount: function() {
                    if(Posts.find({userId: Company.findOne()._id, status:2, type:"nl" }).count() != 0) {
                        return "visible";
                    } else {
                        return "hidden";
                    }
                }, 



});


Template.dashboardMenu.events({


    'click #releaseAdd': function() {
                             var theid = Company.findOne().userId;
                                var d = new Date();
                                  var docs = Company.findOne().userId+"_"+d.getTime();
                                  
                            Router.go('/dashboard/'+theid+'/newPressRelease?new='+theid+"_"+docs+"&type=pr");
                        },
                        
    'click #newsletterAdd': function() {
                             var theid = Company.findOne().userId;
                                var d = new Date();
                                  var docs = Company.findOne().userId+"_"+d.getTime();
                                  
                            Router.go('/dashboard/'+theid+'/newPressRelease?new='+theid+"_"+docs+"&type=nl");
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

