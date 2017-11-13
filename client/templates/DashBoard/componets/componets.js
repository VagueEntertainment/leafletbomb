Template.companyInfo.helpers ({

           userId:function() {    
                return Company.findOne().userId;
            },
            
        companyName:function() {
                       if(Company.find().count() === 0) {
                            Router.go("/marketerSetup/"+Meteor.userId());
                            console.log("setup needed");
                            }
                    return Company.findOne().companyName;
            }, 
        companyLogo:function() { 
                          var file = CompanyAssets.findOne({"companyId":Meteor.userId() }, {"type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
   }, 
        companyLogoSmall: function() {var file = CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
    
   }, 
        companyAddress:function() {
               
                return Company.findOne().companyAddress;
            }, 
        companyCity:function() {
                
                
                return Company.findOne().companyCity;
            }, 
        companyState:function() {
               
                
                return Company.findOne().companyState;
            }, 
        companyCountry:function() {
               
                
                return Company.findOne().companyCountry;
            }, 
        companyPhone:function() {
                
                
                return Company.findOne().companyPhone;
            }, 
        companySP:function() {
               
                
                return Company.findOne().companySP;
            }, 
        companySPImg:function() {
               
                
                return Company.findOne().companySPImg;
            }, 
         about: function() {
                
                
                return Company.findOne().about;
            },
        url:function() {
                
                return Company.findOne().url;
            }, 
        email:function() {
              
                return Company.findOne().email;
            }, 
        twitter:function() {
                
                return Company.findOne().twitter;
            }, 
        facebook:function() {
               
                return Company.findOne().facebook;
            }



});



Template.pr_publishedList.helpers ({


userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },


dashposts:function() {
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:2, type:"pr" }, {sort:{releasedate: -1}});
            }


});


Template.pr_scheduledList.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },


dashposts:function() {
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:1, type:"pr" }, {sort:{releasedate: -1}});
            }

});

Template.pr_draftsList.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },

dashposts:function() {
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:0, type:"pr"}, {sort:{releasedate: -1}});
            }



});


Template.nl_publishedList.helpers ({


userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },


dashposts:function() {
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:2, type:"nl" }, {sort:{releasedate: -1}});
            }


});


Template.nl_scheduledList.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },


dashposts:function() {
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:1, type:"nl" }, {sort:{releasedate: -1}});
            }

});

Template.nl_draftsList.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },

dashposts:function() {
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:0, type:"nl"}, {sort:{releasedate: -1}});
            }



});


Template.pr_draftsList.events ({

    'click .list_Item': function(e) {
                        var theid = '#'+this.docId;
                      /*  if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    } */
                                    
                         Router.go("/dashboard/"+this.userId+"/postCtrl/"+this.docId);
                                    
                       
                    }
                    

});


Template.pr_scheduledList.events ({

    'click .list_Item': function(e) {
                        var theid = '#'+this.docId;
                       /* if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                         $(theid).css("animation-name" , "slideInAnim");
                                    } */
                                   
                       Router.go("/dashboard/"+this.userId+"/postCtrl/"+this.docId);
                    }
                    

});


Template.pr_publishedList.events ({

    'click .list_Item': function(e) {
                        var theid = '#'+this.docId;
                       /* if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                                      $(theid).css('visibility', 'visible');
                                      $(theid).css("animation-name" , "slideInAnim");
                                    } */
                                    
                       Router.go("/dashboard/"+this.userId+"/postCtrl/"+this.docId);
                    }
                    

});


Template.nl_draftsList.events ({

    'click .list_Item': function(e) {
                        var theid = '#'+this.docId;
                      /*  if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    } */
                                    
                         Router.go("/dashboard/"+this.userId+"/postCtrl/"+this.docId);
                                    
                       
                    }
                    

});


Template.nl_scheduledList.events ({

    'click .list_Item': function(e) {
                        var theid = '#'+this.docId;
                       /* if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                         $(theid).css("animation-name" , "slideInAnim");
                                    } */
                                   
                       Router.go("/dashboard/"+this.userId+"/postCtrl/"+this.docId);
                    }
                    

});


Template.nl_publishedList.events ({

    'click .list_Item': function(e) {
                        var theid = '#'+this.docId;
                       /* if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                                      $(theid).css('visibility', 'visible');
                                      $(theid).css("animation-name" , "slideInAnim");
                                    } */
                                    
                       Router.go("/dashboard/"+this.userId+"/postCtrl/"+this.docId);
                    }
                    

});



                
