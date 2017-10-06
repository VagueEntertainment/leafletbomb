Template.postCtrl.helpers ({

   posts: function(e) {

               //return Posts.find({ status:2 }, {sort:{releasedate: -1}});
                return Posts.find();
                            
                    },
                    
  doc: function(e) {
            var id = Router.current().params.docId;
                    
                    return id;
    
                },
  emailEngagment: function(e) {
                    var id = Router.current().params.docId;
                    
                   return PostEngage.find();
                    
                    },
                    

                    
                    
                                 
  
});


Template.postSendItem.helpers ({

    openIcon: function() {
                if(this.opened == 0) {
                    return "fa-envelope-o";
                } else {
                    return "fa-envelope-open-o";
                }
                },
    seenIcon:function() {
                if(this.seen== 0) {
                    return "fa-eye-slash";
                } else {
                    return "fa-eye";
                }
                },
    responseIcon:function() {
                if(this.questions == "") {
                    return "fa-comment-o";
                } else {
                   return "fa-commenting";
                }
                },                       
                                

});


Template.postCtrlMenu.helpers ({



     currentstatus: function(e) {
                           var id = Router.current().params.docId;
                           
                           
                           switch(Posts.findOne({docId:id}).status) {
                                    case 0:return "Draft";break;
                                    case 1:return "Schedule";break;
                                    case 2:return "Published";break;
                                    case 4: return "Archived";break;
                                    default:return "Draft";break;
                           
                          }
                    
                    
                    },              
                    
    releasedate: function() {
                    var id = Router.current().params.docId;
                return Posts.findOne({docId:id}).releasedate;
                },
                
    archivedate: function() {
                    var id = Router.current().params.docId;
                return Posts.findOne({docId:id}).archivedate;
                },
                
                
    companyName: function() {
    
                    return Company.findOne().companyName;
                    },                             

});



Template.postCtrl.events ({


    'click #backbutton': function(e) {
    
                            Router.go('/dashboard/'+Company.findOne().userId);
                        },
                        
                        
                 
                        
                        
    'click #ScheduleOptsCancel' : function() {
    
                            $('#scheduleopts').css('visibility', 'hidden');
                        }, 
                        
     'click #PublishOptsCancel' : function() {
    
                            $('#publishopts').css('visibility', 'hidden');
                        } ,
                        
      'click  #PublishOptsPublish' : function(e) {
                                    var doc = Router.current().params.docId;
      
                                    var docid = Posts.findOne({docId:doc})._id;
                                    
                                    console.log(docid);
                                    var statusupdate = {
                                                            status:2
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate });
                                    
                                    $('#publishopts').css('visibility', 'hidden');
      
                        },
                        
                        
      'click #ScheduleOptsPublish' : function(e) {
                                    var doc = Router.current().params.docId;
                                    
                                    var docid = Posts.findOne({docId:doc})._id;
                                    
                                    var statusupdate = {
                                                            status:1
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate});
                                    
                                    $('#scheduleopts').css('visibility', 'hidden');
      
                        },                                                                                 



});

Template.postCtrlMenu.events ({

    'click #scheduleIt' : function() {
                            
                            $('#scheduleopts').css('visibility', 'visible');
                        }, 
                        
     'click #publishIt' : function() {
                            
                            $('#publishopts').css('visibility', 'visible');
                        },
                        
     'click #editRelease': function() {
                           var doc = Router.current().params.docId;
    
                            Router.go('/dashboard/'+Company.findOne().userId+'/newPressRelease/?edit='+doc);
                        },  
                        
     'click #removeRelease' : function() {
                                var doc = Router.current().params.docId;
                                    
                                    var docid = Posts.findOne({docId:doc})._id;
                                    
                                    var statusupdate = {
                                                            status:4
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate});
     
                        },                                               




});


