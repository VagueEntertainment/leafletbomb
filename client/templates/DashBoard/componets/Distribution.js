Template.distributionList.helpers ({

distributionlists:function() {
                        if(Router.current().params.query.list == "PR") {
                        return DistributionLists.find({type:"PR"});
                        } else {
                        return DistributionLists.find({type:"NL"});
                        }
                    },
                    
                    
                    who: function() {
                            if(Router.current().params.query.list == "PR") {
                            
                            
                            
                            return "Influencers";
                            } else {
                            
                            
                            return "Subscribed";
                            }
                    
                    
                    
                    },
                    
                    
         influencerlist:function() {
                    
                    if(Router.current().params.query.list == "PR") {
                        if(Router.current().params.query.distlist != undefined) {
                            if(Router.current().params.query.distlist == "new") {
                               // return Influencers.find();
                            } else {
                                    var Dist_List = [];
                                   Dist_List =  DistributionLists.findOne({_id:Router.current().params.query.distlist, type:"PR"}).list;
                                            //console.log(Dist_List);
                                  
                                return DistributionLists.findOne({_id:Router.current().params.query.distlist , type:"PR"}).list;
                            }
                        } else {
                            return Influencers.find();
                        
                        }
                        
                        } else {
                        
                        if(Router.current().params.query.distlist != undefined) {
                            if(Router.current().params.query.distlist == "new") {
                               // return Influencers.find();
                            } else {
                                    var Dist_List = [];
                                   Dist_List =  DistributionLists.findOne({_id:Router.current().params.query.distlist, type:"NL"}).list;
                                            //console.log(Dist_List);
                                  
                                return DistributionLists.findOne({_id:Router.current().params.query.distlist , type:"NL"}).list;
                            }
                        } else {
                            return Influencers.find(type:"NL");
                        
                        }
                        
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
 
    listname: function() {
    
                    if(this.listname == undefined) {
                            return DistributionList.findOne({_id:this.trim()}).listname;
                         } else { 

                         return this.listname;
            
                          }
    
        },
        
    message: function() {
    
                if(this.message == undefined) {
                            return DistributionList.findOne({_id:this.trim()}).message;
                         } else { 

                         return this.message;
            
                          }
    
        },    
        
        

     influencerlist:function(e) {
                          var list = [];
                          var selected = 0;
                          
                          console.log(e);
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
                         if(this.Name == undefined) {
                            return Influencers.findOne({_id:this.trim()}).Name;
                         } else { 

                         return this.Name;
            
                          }
                },
        companyName:function() {
                         if(this.companyName == undefined) {
                            return Influencers.findOne({_id:this.trim()}).companyName;
                         } else { 

                         return this.companyName;
            
                          }
                },
        phone:function() {
                         if(this.phone == undefined) {
                            return Influencers.findOne({_id:this.trim()}).phone;
                         } else { 

                         return this.phone;
            
                          }
                },
        email:function() {
                         if(this.email == undefined) {
                            return Influencers.findOne({_id:this.trim()}).email;
                         } else { 

                         return this.email;
            
                          }
                },
        url:function() {
                         if(this.url == undefined) {
                            return Influencers.findOne({_id:this.trim()}).url;
                         } else { 

                         return this.url;
            
                          }
                },
        address:function() {
                         if(this.address == undefined) {
                            return Influencers.findOne({_id:this.trim()}).address;
                         } else { 

                         return this.address;
            
                          }
                },
        state:function() {
                         if(this.state == undefined) {
                            return Influencers.findOne({_id:this.trim()}).state;
                         } else { 

                         return this.state;
            
                          }
                },
        country:function() {
                         if(this.country == undefined) {
                            return Influencers.findOne({_id:this.trim()}).country;
                         } else { 

                         return this.country;
            
                          }
                },
        about:function() {
                         if(this.notes == undefined) {
                            return Influencers.findOne({_id:this.trim()}).notes;
                         } else { 

                         return this.notes;
            
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
     
                        var theid = "";
                        
                        if(this._id == undefined) {
                                theid = "#"+this.trim();
                        } else {
                                theid = "#"+this._id;
                        }
                        
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                                    
                                    if(this._id == undefined) {
                                        Influencers.remove({"_id":this.trim()});
                                    } else {
                                        Influencers.remove({"_id":this._id});
                                    }
                       
                    },
                    
        'click #listdelete': function(e) {  
        
                           var distrolist = Router.current().params.query.distlist;
                           
                             var list = DistributionLists.findOne({_id:distrolist}).list;
                             var newlist = [];
                             
                             for (var num = 0;num < list.length;num = num + 1) {
                                    
                                    if( Influencers.findOne({_id:list[num]}) != undefined ) {
                                            newlist.push(list[num]);
                                            }
                                }
        
                                DistributionLists.update({_id:distrolist},{$set: {list:newlist}});
                            console.log("list "+newlist);
                          
                          
        
        },          
                    
                    
      'mouseenter .list_Item': function() {
                    if(this._id == undefined) {
                        $('#'+this.trim()+'opts').css('visibility', 'visible');
                    } else {
                $('#'+this._id+'opts').css('visibility', 'visible');
                
                }
      
      },
      
       'mouseleave .list_Item': function() {
                        if(this._id == undefined) {
                            $('#'+this.trim()+'opts').css('visibility', 'hidden');
                    } else {
       
                $('#'+this._id+'opts').css('visibility', 'hidden');
                
                }
      
      },       


});



Template.DistributionListItem.events ({

    'click .list_Item': function(e) {
                        //var theid = $(e.target).find('[name=userid]').val();
                       var theid = this._id;
                                    var place = Router.current().params.query.list;
                                    Router.go("/dashboard/"+Company.findOne().userId+"?list="+place+"&distlist="+theid);
                       
                    }, 
                    
       'click #edit': function(e) {
                       // console.log("Edit clicked "+$(e.target).find('[name=userid]').val());
                      // var theid = "#"+$(e.target).find('[name=userid]').val();
                                    var place = Router.current().params.query.list;
                                    Router.go("/dashboard/"+Company.findOne().userId+"?list="+place+"&distlist="+theid);
                            var theid = "#"+this._id;
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               
                                } else {
                                    $(theid).css('visibility', 'visible');
                       
                                    } 
                                    
                  },                                
                    
     'click #delete': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               
                                } else {
                        $(theid).css('visibility', 'visible');
                       
                                    }
                                    DistributionLists.remove({"_id":this._id});
                                    Router.go("/dashboard/"+Company.findOne().userId+"?list=PR");
                       
                    },
                    
      'mouseenter .list_Item': function() {
                $('#'+this._id+'opts').css('visibility', 'visible');
      
      },
      
       'mouseleave .list_Item': function() {
                $('#'+this._id+'opts').css('visibility', 'hidden');
      
      },                              


});

Template.distributionList.events ({

        'click #Show_PRD' : function(e) {
                                Router.go("/dashboard/"+Company.findOne().userId+"?list=PR");
                           
        
                            },
                            
         'click #Show_NLD' : function(e) {
                                Router.go("/dashboard/"+Company.findOne().userId+"?list=NL");
                              
         
                            }, 
                            
         'click #Show_CID' : function(e) {
                               // Router.go("/dashboard/"+Company.findOne().userId+"?list=NL");
                                $("#contactImportwindow").css('visibility', 'visible');
         
                            },                                      

       'click #distroadd' : function(e) {
                                var place = Router.current().params.query.list;
                                Router.go("/dashboard/"+Company.findOne().userId+"?list="+place+"&distlist=new");
                                $("#distroaddwindow").css('visibility', 'visible');
                                $("#distroaddwindow").find('[name=listname]').val("");
                                $("#distroaddwindow").find('[name=message]').val("");
                                
                              
                            
                    },
        'click #showall' : function(e) {
                                    var place = Router.current().params.query.list;
                                Router.go("/dashboard/"+Company.findOne().userId+"?list="+place);
                               
                                //$("#distroaddwindow").css('visibility', 'visible');
                                //$("#distroaddwindow").find('[name=listname]').val("");
                                //$("#distroaddwindow").find('[name=message]').val("");
                                
                              
                            
                    },            
                    
        'click #influenceradd' : function(e) {
                                var place = Router.current().params.query.list;
                                Router.go("/dashboard/"+Company.findOne().userId+"?list="+place+"&inf=new");
                                $("#influenceraddwindow").css('visibility', 'visible');
                                
                                
                    },
                    
        'click #distrocancel' : function(e) {
                                var theid = "#"+this._id;
                                $("#distroaddwindow").css('visibility', 'hidden');
                                $(theid).css('visibility', 'hidden');
                            
                    },
        'click #influencercancel' : function(e) {
                                 var theid = "";
                                 
                                if(this._id != undefined) {
                                  theid = "#"+this._id;
                                  }else {
                                     if(Router.current().params.query.inf != "new") {
                                        theid = "#"+this.trim();
                                        }
                                    }
                                 
                                 
                                $("#influenceraddwindow").css('visibility', 'hidden');
                                $(theid).css('visibility', 'hidden');
                            
                    } ,
                    
                    
        'submit #influencerform': function(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                     var theid = "";
                                 
                                /* if(this._id != undefined) {
                                  theid = "#"+this._id;
                                  }else {
                                     if(Router.current().params.query.distlist != "new") {
                                        theid = "#"+this.trim();
                                        }
                                    }

                                    */
                                                        
                        var info = {
    
                                    userId:theId,
                                    Name:$(e.target).find('[name=name]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    companyName:$(e.target).find('[name=company]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    address:$(e.target).find('[name=address]').val(),
                                    state:$(e.target).find('[name=state]').val(),
                                    country:$(e.target).find('[name=country]').val(),
                                    notes:$(e.target).find('[name=notes]').val(),
                                    type:Router.current().params.query.list
                            };
                            
                            
    
                        
                          var listId = "";
                                    
                                 /*        if(this._id != undefined) {
                                  listId = this._id;
                                  }else {
                                    listId = this.trim();
                                    } */
                        
                        
                         if(Influencers.findOne({_id:listId}) == undefined) {
                                console.log("Creating New "+listId);
                                Influencers.insert(info);
                        
                              } else {
                                    console.log("Updating "+listId);
                                    console.log(info);
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
                             $(e.target).find('[name=notes]').val(""),
                             $(e.target).find('[name=phone]').val("")
                    
                },
                
       'submit #distributionform': function(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                            var theid = "";
                                 
                                 if(this._id != undefined) {
                                  theid = "#"+this._id;
                                  }else {
                                     if(Router.current().params.query.distlist != "new") {
                                        theid = "#"+this.trim();
                                        }
                                    }
                            
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
                                    list:thelist,
                                    type:Router.current().params.query.list
                                    
                                    
                            };
                            
                           if(DistributionLists.find({"listname":$(e.target).find('[name=listname]').val()}).count() == 0) {
    
                                DistributionLists.insert(info); 
                        
                              } else {
                                    var listId = "";
                                    
                                         if(this._id != undefined) {
                                  listId = this._id;
                                  }else {
                                    listId = this.trim();
                                    }
                                    
                                         DistributionLists.update({"_id": listId},{$set: info}); 
                              }
                        
                            $("#distroaddwindow").css('visibility', 'hidden');
                            $(theid).css('visibility', 'hidden');
                            Router.go("/dashboard/"+Company.findOne().userId+"?list=PR");
                            if(Router.current().params.query.distlist == "new") {
                            $(e.target).find('[name=listname]').val("");
                             $(e.target).find('[name=message]').val("");
                                }
                    
                } , 


});


