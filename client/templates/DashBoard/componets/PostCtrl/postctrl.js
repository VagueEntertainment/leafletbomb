Template.postCtrl.helpers ({

   posts: function(e) {

               return Posts.find({ status:2 }, {sort:{releasedate: -1}});
                            
                    },
                    
  doc: function(e) {
            var id = Router.current().params.query.docId;
                    
                    return id;
    
                },
  emailEngagment: function(e) {
                    var id = Router.current().params.query.docid;
                    
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

    companyName: function() {
    
                    return Company.findOne().companyName;
                    }

});

Template.postCtrlMenu.events ({


    'click #backbutton': function(e) {
    
                            Router.go('/dashboard/'+Company.findOne().userId);
                        }



});
