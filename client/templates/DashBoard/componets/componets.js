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
                    var id= Company.findOne()._id;
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
                    var id= Company.findOne()._id;
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
                    var id= Company.findOne()._id;
                return Posts.find({userId: id, status:0 }, {sort:{releasedate: -1}});
            }



});

Template.distributionList.helpers ({

distributionlists:function() {
                        
                        return DistributionLists.find();
                    },
         influencerlist:function() {
                        if(Router.current().params.query.distlist != undefined) {
                            if(Router.current().params.query.distlist == "all") {
                                return Influencers.find();
                            } else {
                                    var Dist_List = [];
                                   Dist_List =  DistributionLists.findOne({_id:Router.current().params.query.distlist}).list;
                                            //console.log(Dist_List);
                                  
                                return DistributionLists.findOne({_id:Router.current().params.query.distlist}).list;
                            }
                        } else {
                            return Influencers.find();
                        
                        }
                    },
         presslist:function() {
                        
                        return Influencers.find();
                    },
                    
        listName: function() {
        
                      return DistributionLists.findOne({_id:Router.current().params.query.distlist}).listname;          
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



Template.influencerForm.helpers ({

        Name: function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).Name;
                         } else { 

                         return this.Name;
            
                          }
                },
        companyName:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).companyName;
                         } else { 

                         return this.companyName;
            
                          }
                },
        phone:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).phone;
                         } else { 

                         return this.phone;
            
                          }
                },
        email:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).email;
                         } else { 

                         return this.email;
            
                          }
                },
        url:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).url;
                         } else { 

                         return this.url;
            
                          }
                },
        address:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).address;
                         } else { 

                         return this.address;
            
                          }
                },
        state:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).state;
                         } else { 

                         return this.state;
            
                          }
                },
        country:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).country;
                         } else { 

                         return this.country;
            
                          }
                },
        about:function() {
                         if(Router.current().params.query.distlist != undefined) {
                            return Influencers.findOne({_id:this.trim()}).about;
                         } else { 

                         return this.about;
            
                          }
                }        

});
   
 
 Template.DistributionListItem.helpers({
 
 distid: function() {return this._id;},
 
 numinlist:function() {return DistributionLists.findOne({listname:this.listname}).list.length;}
                          
 });
 
 
Template.influencerItem.helpers({

userid: function() {
            Meteor.subscribe('influencers');

            if(Router.current().params.query.distlist != undefined) {
                return this.trim();
            } else { 

            return this._id;
            
           }
},

Name: function() {
            Meteor.subscribe('influencers');
    if(Router.current().params.query.distlist != undefined) {
               
            
            return Influencers.findOne({_id:this.trim()}).Name;
        } else {

        return this.Name;
    
    }
},

companyName: function() {

    if(Router.current().params.query.distlist != undefined) {
            return Influencers.findOne({_id:this.trim()}).companyName;
        } else {

            return this.companyName;
    
        }
},

avatar: function() {

        if(Router.current().params.query.distlist != undefined) {
            email= Influencers.findOne({_id:this.trim()}).email;
            
            var md5Hash = Gravatar.hash(email);
            return `<img height=64 width=auto class="img-circle" src='https://www.gravatar.com/avatar/`+md5Hash+`' > </img>`;
        } else {
        
            var md5Hash = Gravatar.hash(this.email);
            return `<img height=64 width=auto class="img-circle" src='https://www.gravatar.com/avatar/`+md5Hash+`' > </img>`;

        }

    }

});



Template.draftsList.events ({

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


Template.scheduledList.events ({

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


Template.publishedList.events ({

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
                        var theid = $(e.target).find('[name=userid]').val();
                       /* if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim"); 
                                    } */
                                    
                                    Router.go("/dashboard/"+Company.findOne()._id+"?distlist="+theid);
                       
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
                    var theid = "";
                    
                    // if(Router.current().params.query.distlist == undefined) {
                    
                                theid = "#"+this._id;
                                
                            //    } else {
                                
                             //       theid ="#"+this.trim();
                            //    }
                    
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
                            
                             $(e.target).find('[name=name]').val(""),
                             $(e.target).find('[name=company]').val(""),
                             $(e.target).find('[name=email]').val(""),
                             $(e.target).find('[name=url]').val(""),
                             $(e.target).find('[name=address]').val(""),
                             $(e.target).find('[name=state]').val(""),
                             $(e.target).find('[name=country]').val(""),
                             $(e.target).find('[name=notes]').val("")
                    
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
                            $(e.target).find('[name=listname]').val("");
                             $(e.target).find('[name=message]').val("");
                    
                    
                } , 


});

                
