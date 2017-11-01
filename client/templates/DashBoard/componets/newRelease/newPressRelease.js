Template.newPressRelease.rendered=function () {

    $('#releasedatepicker').datepicker();
    $('#archivedatepicker').datepicker();
    
    if(Meteor.userId() == null) {
        Router.go("/login");
    
    }

}

Template.newPressRelease.helpers ({
    
    
    pagetitle: function(e) {
            if (Router.current().params.query.edit == undefined) {
            return "New Release";
            } else {
            return "Edit Release";
            }
            
      },      
          
    documentId:function(e) {
            if (Router.current().params.query.edit == undefined) {
                return Router.current().params.query.new
        } else {   
        return Router.current().params.query.edit;
        }
    },
    
    userId:function() {return Meteor.users.findOne()._id},
    date: function() {return Date()},
    releasedata: function() {
                if (Router.current().params.query.edit == undefined) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).release;
        }
    },
    thetitle: function() {
                if (Router.current().params.query.edit == undefined) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).title;
        }
    },
    thetagline: function() {
                if (Router.current().params.query.edit == undefined) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).tagline;
        }
    },
    releaseButton : function() {
                if( Router.current().params.query.edit == undefined) {
                
                
                 } else {
    return ``;
    }
    },
    
    releasedate: function() {
                if (Router.current().params.query.edit == undefined) {
                        var d = new Date();
                        var theday = "";
                        var themonth = "";
                        if(d.getDate() < 10) {
                            theday = "0"+d.getDate();
                            } else {
                            theday = d.getDate();
                            }
                            
                            if((d.getMonth() + 1) < 10) {
                            themonth = "0"+(d.getMonth() + 1);
                            } else {
                            themonth = (d.getMonth() + 1);
                            }
                            var currentdate = themonth+'/'+theday+'/'+d.getFullYear();
                           /* if($("#therelease").find('[name=releasedate]').val() == currentdate) {
                                    return currentdate;    
                            } else {
                              return  $("#therelease").find('[name=releasedate]').val();
                            } */
                            //return $("#therelease").find('[name=releasedate]').val();
                            return currentdate;   
                            
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).releasedate;
        }
    },
    archivedate: function() {
                if (Router.current().params.query.edit == undefined) {
                        var d = new Date();
                        var theday = "";
                        var themonth = "";
                        if(d.getDate() < 10) {
                            theday = "0"+d.getDate();
                            } else {
                            theday = d.getDate();
                            }
                            
                            if((d.getMonth() + 1) < 10) {
                            themonth = "0"+(d.getMonth() + 1);
                            } else {
                            themonth = (d.getMonth() + 1);
                            }
                            
                    return themonth+'/'+theday+'/'+(d.getFullYear() +1);        
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).archivedate;
        }
    },
    tags: function() {
                if (Router.current().params.query.edit == undefined) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).tags;
        }
    },
    
    
    
    asset1: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               
               var thefiles = [];
               if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  }                          
                  
                    
             return thefiles[0];
             //return thefiles;
            
        },
        
         a1v: function () {
                       var thefiles = []; 
                      if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  }  
                             
            if(thefiles[0]) {
            return "visible";
            } else {
            return "hidden";
            }
        },
        
     asset2: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                
               var thefiles = [];
               if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                       var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } 
             return thefiles[1];
             //return thefiles;
            
        },
        
         a2v: function () {
                       var thefiles = []; 
                      if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  }             
            if(thefiles[1]) {
            return "visible";
            } else {
            return "hidden";
            }
        },
        
     asset3: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                
               var thefiles = [];
               if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                       var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } 
                    
             return thefiles[2];
             //return thefiles;
            
        },
        
         a3v: function () {
                       var thefiles = []; 
                      if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  }             
            if(thefiles[2]) {
            return "visible";
            } else {
            return "hidden";
            }
        },
        
     asset4: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                
               var thefiles = [];
               if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                       var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } 
             return thefiles[3];
             //return thefiles;
            
        } ,
        
         a4v: function () {
                       var thefiles = []; 
                      if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  }             
            if(thefiles[3]) {
            return "visible";
            } else {
            return "hidden";
            }
        },
        
     asset5: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
                 
               var thefiles = [];
               if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } 
                    
             return thefiles[4];
             //return thefiles;
            
        },
        
         a5v: function () {
                       var thefiles = []; 
                      if (Router.current().params.query.edit == undefined) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = Router.current().params.query.new;
                   
                   PostAssets.find({docId:docs}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  } else { 
                         PostAssets.find({docId:Router.current().params.query.edit}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                  }             
            if(thefiles[4]) {
            return "visible";
            } else {
            return "hidden";
            }
        },
        
        
        featured: function () {
                    var featuredfile ="/media/file_placeholder.png";
                    var thisdoc = "";
                        if (Router.current().params.query.edit == undefined) {
                        
                                    var theid = Meteor.users.findOne()._id;
                                    var docs = Router.current().params.query.new;
                                    
                                    if (PostAssets.findOne({docId:docs , type:"featured"}) == undefined) {
                                        featuredfile ="/media/file_placeholder.png";
                                        
                                        } else {
                   
                                        featuredfile = Images.findOne({_id:PostAssets.findOne({docId:docs , type:"featured"}).filename}).url();
                                   
                                         }
                                                                                    
                        } else { 
                  
                                if (PostAssets.find({docId:Router.current().params.query.edit , type:"featured"}) != undefined) {
                                
                                       featuredfile = Images.findOne({_id:PostAssets.findOne({docId:Router.current().params.query.edit , type:"featured"}).filename}).url();
                                  
                             
                                 } else {
                                 
                                    featuredfile =  "/media/file_placeholder.png";
                                  }
                    
                  }
                   return featuredfile;
        } ,
        
        distributionlists:function(e) {
                          var list = [];
                          var selected = 0;
                          var thisdoc = "";
                          if ( Router.current().params.query.edit !=undefined) {
                            thisdoc =Router.current().params.query.edit;
                           } else {
                            thisdoc = Router.current().params.query.new;
                           }
                          
                          if(PostDistribution.findOne({"docId":thisdoc}) != undefined) {
                                selected = PostDistribution.findOne({"docId":thisdoc}).list;
                          }
                          var listindex = 0;
                          DistributionLists.find().forEach( function(stuff) {
                            list.push({"_id":stuff._id, "listname":stuff.listname ,  "selected":"unchecked"});
                            
                            for(var num = 0;num < selected.length;num++) {
                                if(list[listindex]._id == selected[num]) {
                                   list[listindex] = ({"_id":stuff._id, "listname":stuff.listname ,  "selected":"checked"});
                                      }
                                    
                                    }
                                   
                                listindex = listindex +1;
                           });
                                   
                          return list; 
                        },
  
});

Template.newPressRelease.events ({

'click #calender': function(e) {
                   $("#calenderpicker").css('visibility','visible');
                },
                
'click #setCalender': function(e) {
                    $("#calenderpicker").css('visibility','hidden');
                },
                
'click #cheatsheet': function(e) {
                    $("#CheatSheetWindow").css('visibility','visible');
                },                
'click #cheatsheetClose': function(e) {
                    $("#CheatSheetWindow").css('visibility','hidden');
                },                
                                


'submit form': function(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                var d = new Date();
                var docs = "" 
                if(Router.current().params.query.new == undefined) {
                    docs = Router.current().params.query.edit;
                } else {
                    docs = Router.current().params.query.new;
                }
                console.log("Current Doc "+docs);
                var thelist = [];
                            
                DistributionLists.find().forEach( function(stuff) { 
                     if($(e.target).find('[name="'+stuff.listname+'"]').is(":checked")) {
                               
                               thelist.push ($(e.target).find('[name="'+stuff.listname+'"]').val() );
                                                                                }
                                                                           } );
                                                                           
                  console.log(thelist);                                                         
    
                               
   if(Router.current().params.query.edit === undefined) {
   
    
               var theDate = function() { 
                                var d = new Date();
                                var theday = "";
                                var themonth = "";
                        
                                    if(d.getDate() < 10) {
                                        theday = "0"+d.getDate();
                                      } else {
                                        theday = d.getDate();
                                      }
                            
                                    if((d.getMonth() + 1) < 10) {
                                        themonth = "0"+(d.getMonth() + 1);
                                     } else {
                                        themonth = (d.getMonth() + 1);
                                     }
                            
                                return themonth+'/'+theday+'/'+(d.getFullYear()); 
                               };     
   
    if($(e.target).find('[name=releasedate]').val() == theDate) {
    
        console.log("Dates match");
    }
   
   var Info = {
        userId:Company.findOne()._id,
        title:$(e.target).find('[name=title]').val(),
        tagline:$(e.target).find('[name=tagline]').val(),
        creationdate:(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear(),
        releasedate:$(e.target).find('[name=releasedate]').val(),
        archivedate:$(e.target).find('[name=archivedate]').val(),
        release:$(e.target).find('[name=release]').val(),
        tags:$(e.target).find('[name=keywords]').val(),
        assets:$(e.target).find('[name=file]').val(),
        docId:docs,
        status:0,
        authorId:Meteor.users.findOne()._id
    }; 
    Posts.insert(Info);
    
    var schedule = {
    
                docId:docs,
                releasedate:$(e.target).find('[name=releasedate]').val(),
                archivedate:$(e.target).find('[name=archivedate]').val(),
                list:thelist
    
    
    };
    
    PostDistribution.insert(schedule);
    
    
    } else {
    var listId = Posts.findOne({"docId":Router.current().params.query.edit})._id;
    
    var Info = {
        userId:Company.findOne()._id,
        title:$(e.target).find('[name=title]').val(),
        tagline:$(e.target).find('[name=tagline]').val(),
        creationdate:(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear(),
        releasedate:$(e.target).find('[name=releasedate]').val(),
        archivedate:$(e.target).find('[name=archivedate]').val(),
        release:$(e.target).find('[name=release]').val(),
        tags:$(e.target).find('[name=keywords]').val(),
        assets:$(e.target).find('[name=file]').val(),
        status:this.status,
        authorId:Meteor.users.findOne()._id
        
    };
    
    Posts.update({"_id": listId},{$set: Info});  
    
    var schedule = "";
    
    if(PostDistribution.findOne() != undefined) {
    
        var scheduleId = PostDistribution.findOne({"docId":Router.current().params.query.edit})._id;
         console.log(scheduleId);
        
        if(scheduleId != undefined) {
             schedule = {
    
                    //docId:docs,
                 releasedate:$(e.target).find('[name=releasedate]').val(),
                 archivedate:$(e.target).find('[name=archivedate]').val(),
                 list:thelist
    
    
             };
             console.log(schedule);
            PostDistribution.update({"_id": scheduleId},{$set: schedule});
            
        } else {
    
            schedule = {
    
                docId:docs,
                releasedate:$(e.target).find('[name=releasedate]').val(),
                archivedate:$(e.target).find('[name=archivedate]').val(),
                list:thelist
    
    
                };
    
            PostDistribution.insert(schedule);
             }
        } else {
        
        
             schedule = {
    
                //docId:docs,
                releasedate:$(e.target).find('[name=releasedate]').val(),
                archivedate:$(e.target).find('[name=archivedate]').val(),
                list:thelist
    
    
                };
    
            PostDistribution.insert(schedule);
        
        
        }
        
        //file output for "clipboard" //
  /*  var name = $(e.target).find('[name=title]').val()+"_"+$(e.target).find('[name=releasedate]').val();
   // var readStream = $(e.target).find('[name=release]').val();
    var readStream = ("testing stuff this is just a string");
   
    var newFile = new FS.File();
    newFile.createWriteStream('files');
    newFile.name("test.txt");
    Files.insert(newFile); */
  
    
    }
    //var newrelease = Posts.findOne({"docId":Router.current().params.query.edit})._id;
    
   // Router.go('/dashboard/'+Company.findOne().userId+'/newPressRelease/?edit='+docs);
    
   Router.go("/dashboard/"+theId+"/postCtrl/"+docs);
    

},

  'change .myFileInput': function(event, template) {
    var files = event.target.files;
    
    var theId =  Meteor.users.findOne()._id;
     
      var docs = "";
                     
                     
                      if(Router.current().params.query.new == undefined) {
                    docs = Router.current().params.query.edit;
                } else {
                    docs = Router.current().params.query.new;
                }
    
    
    
        $('#assetlist').css("display","none");
         $('#uploading').css("display","inherit");
        
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    docId:docs,
                   filename:fileObj._id,
                   type:"asset"
            };
            PostAssets.insert(info);
            $('#assetlist').css("display","inherit");
            $('#uploading').css("display","none");
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  },
  
  
   'change .featuredImgInput': function(event, template) {
                    var files = event.target.files;
    
                    var theId =  Meteor.users.findOne()._id;
                     var docs = "";
                     
                     
                      if(Router.current().params.query.new == undefined) {
                    docs = Router.current().params.query.edit;
                } else {
                    docs = Router.current().params.query.new;
                }
                     
                     
                    
    
                      $('#assetlist').css("display","none");
                      $('#uploading').css("display","inherit");
        
     
                      for (var i = 0, ln = files.length; i < ln; i++) {

                             
                              Images.insert(files[i], function (err, fileObj) {
                        if (err) {
        
                         } else {
                                    
                                
                                if(PostAssets.findOne({docId:docs , type:"featured"}) == undefined) {
                                var info = {
                                       docId:docs,
                                     filename:fileObj._id,
                                     type:"featured"
                                      };
            PostAssets.insert(info);
            
            } else {
                var id = PostAssets.findOne({docId:docs , type:"featured"})._id;
                var info = {
                                       docId:docs,
                                     filename:fileObj._id,
                                     type:"featured"
                                      };
                                      
                                      
                PostAssets.update({"_id": id},{$set: info});
            
            }
            $('#assetlist').css("display","inherit");
            $('#uploading').css("display","none");
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  },
  
  
});

