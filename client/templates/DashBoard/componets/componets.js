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
             
                            Meteor.subscribe('images');
                            Meteor.subscribe('companyassets');
             
                            var file = CompanyAssets.findOne({"companyId":masterUserId, "type":"companySPImg"}).filename;
                        
                                
                          return Images.findOne({_id:file}).url();
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
 
 Template.DistributionListItem.helpers({
 
 numinlist:function() {return DistributionLists.findOne({listname:this.listname}).list.length;}
 
 });



Template.draftsList.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=docid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                } else {
                        $(theid).css('visibility', 'visible');
                                    }
                       
                    }
                    

});


Template.scheduledList.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=docid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                } else {
                        $(theid).css('visibility', 'visible');
                                    }
                       
                    }
                    

});


Template.publishedList.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=docid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                                } else {
                        $(theid).css('visibility', 'visible');
                                    }
                       
                    }
                    

});

                
