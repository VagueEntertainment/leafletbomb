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



Template.publishedList.helpers ({


userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },


dashposts:function() {
                    var id= Meteor.users.findOne()._id;
                return Posts.find({userId: id, status:2 }, {sort:{releasedate: -1}});
            }


});


Template.scheduledList.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },


dashposts:function() {
                    var id= Meteor.users.findOne()._id;
                return Posts.find({userId: id, status:1 }, {sort:{releasedate: -1}});
            }

});

Template.draftsList.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
            
docId: function() {
                return this.docId;
                  },

dashposts:function() {
                    var id= Meteor.users.findOne()._id;
                return Posts.find({userId: id, status:0 }, {sort:{releasedate: -1}});
            }



});

Template.teamList.helpers ({

userId:function() {
                
                return Meteor.users.findOne()._id;
            },
            
//docId: function() {
               //return this.docId;
               //   },

team: function() {
                    var id= Meteor.users.findOne()._id;
                return CompanyTeam.find();
            }


});


Template.MasterAccount.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
companyId:function() {
                return Company.findOne().userId;
            },            
            
userName: function() {
                var masterUserId = Company.findOne().userId;
                return Meteor.users.findOne({_id:masterUserId}).profile.name;
                },
                
email: function() {
                var masterUserId = Company.findOne().userId;
                return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                },
                
avatar: function () {
                var masterUserId = Company.findOne().userId;
             
                         //   Meteor.subscribe('images');
                         //   Meteor.subscribe('companyassets');
             
                            var file = CompanyAssets.findOne({"companyId":masterUserId},{ "type":"companySPImg"}).filename;
                        
                                
                         // return Images.findOne({_id:file}).url();
                         
                         return '<i class="fa fa-user-circle-o fa-5x">';
                }                            
        
});


Template.maTemplate.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
companyId:function() {
                return Company.findOne().userId;
            },            
            
userName: function() {
                var masterUserId = Company.findOne().userId;
                return Meteor.users.findOne({_id:masterUserId}).profile.name;
                },
                
email: function() {
                var masterUserId = Company.findOne().userId;
                return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                },
                
avatar: function () {
                var masterUserId = Company.findOne().userId;
             
                         //   Meteor.subscribe('images');
                         //   Meteor.subscribe('companyassets');
             
                            var file = CompanyAssets.findOne({"companyId":masterUserId},{ "type":"companySPImg"}).filename;
                        
                                
                         // return Images.findOne({_id:file}).url();
                         
                         return '<i class="fa fa-user-circle-o fa-5x">';
                }                              
        
});



Template.TeamItem.helpers ({

avatar: function(e) {
            
            if(CompanyTeam.findOne({_id:this._id}).avatar == "") {
            
            return '<i class="fa fa-user-circle-o fa-5x"  aria-hidden="true"></i>';
            
            } else {
             return '<img src="{{avatar}}"  height="64" width="auto" alt="" style="margin-top:35%">';
            }

        },
 userid: function(e) {
            return CompanyTeam.findOne({name:this.name})._id;
 
 }


});



Template.distributionList.helpers ({

distributionlists:function() {
                        
                        return DistributionLists.find();
                    },
         influencerlist:function() {
                        
                        return Influencers.find();
                    },
         presslist:function() {
                        
                        return Influencers.find();
                    }
                    
 });
 
 Template.distrobutionForm.helpers({
 
    

     influencerlist:function() {
                          var list = [];
                          var selected = 0;
                          if(DistributionLists.findOne({"listname":this.listname}) != undefined) {
                                selected = DistributionLists.findOne({"listname":this.listname}).list;
                          }
                          var listindex = 0;
                          Influencers.find().forEach( function(stuff) {
                            list.push({"_id":stuff._id, "Name":stuff.Name , "companyName":stuff.companyName, "selected":"unchecked"});
                            
                            for(var num = 0;num < selected.length;num++) {
                                if(list[listindex]._id == selected[num]) {
                                   list[listindex] = ({"_id":stuff._id, "Name":stuff.Name , "companyName":stuff.companyName, "selected":"checked"});
                                      }
                                    
                                    }
                                   
                                listindex = listindex +1;
                           });
                                   
                          return list;  
                        
                        
                    },

});
   
 
 Template.DistributionListItem.helpers({
 
 distid: function() {return this._id;},
 
 numinlist:function() {return DistributionLists.findOne({listname:this.listname}).list.length;}
                          
 });
 
 
Template.influencerItem.helpers({

userid: function() {return this._id;}

});



Template.draftsList.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=docid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    }
                    

});


Template.scheduledList.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=docid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                         $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    }
                    

});


Template.publishedList.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=docid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                         $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    }
                    

});

Template.TeamItem.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    },
                    
      'click #delete': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                                    CompanyTeam.remove({"_id":this._id});
                       
                    }              
                    

});

Template.MasterAccount.events ({

        'click .list_Item': function(e) {
                        var theid = "#"+Company.findOne().userId;
                            
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    },
                    
                    
        
                    

});


Template.teamList.events ({

     'submit #teamform' : function(e) {
                                     e.preventDefault();
                                var theId =  Meteor.users.findOne()._id;
                                var theid = "#"+this._id;
                            
                                var info = {
                                    companyId:Company.findOne()._id,
                                    name:$(e.target).find('[name=name]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    about:$(e.target).find('[name=about]').val(),
                                    avatar:""  
                                };
                                
                            
                           if(CompanyTeam.find({"name":$(e.target).find('[name=name]').val()}).count() == 0) {
                                    
                                CompanyTeam.insert(info); 
                        
                              } else {
                                    
                                   var listId = $(theid).find('[name=userid]').val();
                                         CompanyTeam.update({"_id": listId},{$set: info}); 
                              }
                              //  var theid = "#"+$(e.target).find('[name=userid]').val();
                                
                            $("#teamaddwindow").css('visibility', 'hidden');
                            $(theid).css('visibility', 'hidden');
                            
                                    },
                                    
                                    
            'click #teamcancel' : function(e) {
                                var theid = "#"+this._id;
                                $("#teamaddwindow").css('visibility', 'hidden');
                                $(theid).css('visibility', 'hidden');
                                
                            
                    },
                    
                     'click #teamadd' : function(e) {
                                $("#teamaddwindow").css('visibility', 'visible');
                            
                    } ,
                    
                    
                    
             'submit #maform' : function(e) {
                                     e.preventDefault();
                                var theId =  Meteor.users.findOne()._id;
                                var theid = "#"+this._id;
                            
                                var info = {
                                    companyId:Company.findOne()._id,
                                    name:$(e.target).find('[name=name]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    about:$(e.target).find('[name=about]').val(),
                                    avatar:""  
                                };
                                
                            
                           if(CompanyTeam.find({"name":$(e.target).find('[name=name]').val()}).count() == 0) {
                                    
                                CompanyTeam.insert(info); 
                        
                              } else {
                                    
                                   var listId = $(theid).find('[name=userid]').val();
                                         CompanyTeam.update({"_id": listId},{$set: info}); 
                              }
                              //  var theid = "#"+$(e.target).find('[name=userid]').val();
                                
                            $("#teamaddwindow").css('visibility', 'hidden');
                            $(theid).css('visibility', 'hidden');
                            
                                    },       
                   
                    
                    'click #macancel' : function(e) {
                                 var theid = "#"+Company.findOne().userId;
                                
                                $(theid).css('visibility', 'hidden');
                                
                            
                    },                       

});

Template.influencerItem.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    },
                    
     'click #delete': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                                    Influencers.remove({"_id":this._id});
                       
                    }    


});

Template.DistributionListItem.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    },
                    
     'click #delete': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                                    DistributionLists.remove({"_id":this._id});
                       
                    }                  


});

Template.distributionList.events ({

       'click #distroadd' : function(e) {
                                $("#distroaddwindow").css('visibility', 'visible');
                                $("#distroaddwindow").find('[name=listname]').val("");
                                $("#distroaddwindow").find('[name=message]').val("");
                                
                              
                            
                    },
        'click #influenceradd' : function(e) {
                                $("#influenceraddwindow").css('visibility', 'visible');
                                
                                
                    },
                    
        'click #distrocancel' : function(e) {
                                var theid = "#"+this._id;
                                $("#distroaddwindow").css('visibility', 'hidden');
                                $(theid).css('visibility', 'hidden');
                            
                    },
        'click #influencercancel' : function(e) {
                                 var theid = "#"+this._id;
                                $("#influenceraddwindow").css('visibility', 'hidden');
                                $(theid).css('visibility', 'hidden');
                            
                    } ,
                    
                    
        'submit #influencerform': function(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                    var theid = "#"+this._id;
                    
                        var info = {
    
                                    userId:theId,
                                    Name:$(e.target).find('[name=name]').val(),
                                    companyName:$(e.target).find('[name=company]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    address:$(e.target).find('[name=address]').val(),
                                    state:$(e.target).find('[name=state]').val(),
                                    country:$(e.target).find('[name=country]').val(),
                                    notes:$(e.target).find('[name=notes]').val()
                            };
    
                        
                        
                         if(Influencers.find({"Name":$(e.target).find('[name=name]').val()}).count() == 0) {
    
                                Influencers.insert(info);
                        
                              } else {
                                    var listId = Influencers.findOne({"Name":$(e.target).find('[name=name]').val()})._id;
                                         Influencers.update({"_id": listId},{$set: info}); 
                              }
                     
                            $("#influenceraddwindow").css('visibility', 'hidden');
                            $(theid).css('visibility', 'hidden');
                    
                },
                
       'submit #distributionform': function(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                            var theid = "#"+this._id;
                            
                            var thelist = [];
                            
                                Influencers.find().forEach( function(stuff) { 
                                                                            if($(e.target).find('[name="'+stuff.Name+'"]').is(":checked")) {
                                                                                     thelist.push ($(e.target).find('[name="'+stuff.Name+'"]').val() );
                                                                                }
                                                                           } );
                                                                         
                
                        var info = {
                                    userId:theId,
                                    listname:$(e.target).find('[name=listname]').val(),
                                    message:$(e.target).find('[name=message]').val(),
                                    list:thelist
                                    
                                    
                            };
                            
                           if(DistributionLists.find({"listname":$(e.target).find('[name=listname]').val()}).count() == 0) {
    
                                DistributionLists.insert(info); 
                        
                              } else {
                                    var listId = DistributionLists.findOne({"listname":$(e.target).find('[name=listname]').val()})._id;
                                         DistributionLists.update({"_id": listId},{$set: info}); 
                              }
                        
                            $("#distroaddwindow").css('visibility', 'hidden');
                            $(theid).css('visibility', 'hidden');
                            
    
                    
                } , 


});

                
