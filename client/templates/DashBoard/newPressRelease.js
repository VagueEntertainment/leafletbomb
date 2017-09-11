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
        var theid = Meteor.users.findOne()._id;
        var d = new Date();
        var docs = Company.findOne()._id+"_"+d.getTime();
        return theid+"_"+docs;
        } else {   
        return Router.current().params.query.edit;
        }
    },
    
    userId:function() {return Meteor.users.findOne()._id},
    date: function() {return Date()},
    releasedata: function() {
                if (Router.current().params.query.edit.length == 0) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).release;
        }
    },
    thetitle: function() {
                if (Router.current().params.query.edit.length == 0) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).title;
        }
    },
    thetagline: function() {
                if (Router.current().params.query.edit.length == 0) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).tagline;
        }
    },
    releasedate: function() {
                if (Router.current().params.query.edit.length == 0) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).releasedate;
        }
    },
    archivedate: function() {
                if (Router.current().params.query.edit.length == 0) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).archivedate;
        }
    },
    tags: function() {
                if (Router.current().params.query.edit.length == 0) {
                    return "";    
                } else {
                    return Posts.findOne({docId:Router.current().params.query.edit}).tags;
        }
    },
    
    
    
    asset1: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               
               var thefiles = [];
               if (Router.current().params.query.edit.length == 0) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = $("#therelease").find('[name=docId]').val();
                   
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
     asset2: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                
               var thefiles = [];
               if (Router.current().params.query.edit.length == 0) {
                        var theid = Meteor.users.findOne()._id;
                       var docs = $("#therelease").find('[name=docId]').val();
                   
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
     asset3: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                
               var thefiles = [];
               if (Router.current().params.query.edit.length == 0) {
                        var theid = Meteor.users.findOne()._id;
                       var docs = $("#therelease").find('[name=docId]').val();
                   
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
     asset4: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                
               var thefiles = [];
               if (Router.current().params.query.edit.length == 0) {
                        var theid = Meteor.users.findOne()._id;
                       var docs = $("#therelease").find('[name=docId]').val();
                   
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
     asset5: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
                 
               var thefiles = [];
               if (Router.current().params.query.edit.length == 0) {
                        var theid = Meteor.users.findOne()._id;
                        var docs = $("#therelease").find('[name=docId]').val();
                   
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
  
  
});

Template.newPressRelease.events ({


'submit form': function(e) {
           // e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                var d = new Date();
                var docs = $("#therelease").find('[name=docId]').val();
    
   
   if(Router.current().params.query.edit === undefined) {
   
   var Info = {
        userId:theId,
        title:$(e.target).find('[name=title]').val(),
        tagline:$(e.target).find('[name=tagline]').val(),
        creationdate:(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear(),
        releasedate:$(e.target).find('[name=releasedate]').val(),
        archivedate:$(e.target).find('[name=archivedate]').val(),
        release:$(e.target).find('[name=release]').val(),
        tags:$(e.target).find('[name=keywords]').val(),
        assets:$(e.target).find('[name=file]').val(),
        docId:docs,
        status:0
    };
   
    
    Posts.insert(Info);
    
    } else {
    var listId = Posts.findOne({"docId":Router.current().params.query.edit})._id;
    
    var Info = {
        userId:theId,
        title:$(e.target).find('[name=title]').val(),
        tagline:$(e.target).find('[name=tagline]').val(),
        creationdate:(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear(),
        releasedate:$(e.target).find('[name=releasedate]').val(),
        archivedate:$(e.target).find('[name=archivedate]').val(),
        release:$(e.target).find('[name=release]').val(),
        tags:$(e.target).find('[name=keywords]').val(),
        assets:$(e.target).find('[name=file]').val(),
        status:0
    };
    
    Posts.update({"_id": listId},{$set: Info});
    
    }
    
    Router.go("/dashboard/"+theId);
    

},

  'change .myFileInput': function(event, template) {
    var files = event.target.files;
    
    var theId =  Meteor.users.findOne()._id;
    var docs = $("#therelease").find('[name=docId]').val();
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    docId:docs,
                   filename:fileObj._id
            };
            PostAssets.insert(info);
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }
  
  
  
});








