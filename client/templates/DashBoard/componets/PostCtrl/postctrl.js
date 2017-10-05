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
                        
                        
    'click #editRelease': function() {
                           var doc = Router.current().params.docId;
    
                            Router.go('/dashboard/'+Company.findOne().userId+'/newPressRelease/?edit='+doc);
                        }                    



});



