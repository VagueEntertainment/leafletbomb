Template.releaseItems.helpers({

title:function(e) {
     return "Releases";
},

width:function(e) {
     return "48%";
        
},

height:function(e) {
     return "100%";
},

releaselist: function(e) {
            var id= Meteor.users.findOne()._id;
             var postlist = [];
                if(Posts.findOne({userId: id,status:2 }) == undefined) {
                   postlist = [{title:'No Published Releases ',tagline:'0 found'}];
                } else {
                   postlist = Posts.find({userId: id, status:2 }, {sort:{releasedate: -1}});
                    }
         return postlist;
                        
            
 },
 draftlist: function(e) {
            var id= Meteor.users.findOne()._id;
            var postlist= [];
                if(Posts.findOne({userId: id,status:0 }) == undefined) {
                   postlist = [{title:'No Drafts ',tagline:'0 found'}];
                } else {
                   postlist = Posts.find({userId: id, status:0 }, {sort:{releasedate: -1}});
                    }
         return postlist;
                        
            
 },
 scheduledlist: function(e) {
            var id= Meteor.users.findOne()._id;
            var postlist = [];
                if(Posts.findOne({userId: id,status:1 }) == undefined) {
                   postlist = [{title:'No Scheduled Releases  ',tagline:'0 found'}];
                } else {
                   postlist = Posts.find({userId: id, status:1 }, {sort:{releasedate: -1}});
                   
                    }
            
         return postlist;
                        
            
 }

});

Template.releaseItem.helpers({

    docid: function(e) {
            return this.docid;
        },
    title: function(e) {
        return this.title;
        },    
        
    companyLogoSmall: function() {var file = CompanyAssets.findOne({"companyId":this.userId , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
    
   }, 
   
   totalseen:function(e) { return 0; },
   
   totalcreated:function(e) { return 0; },
   
   totalshared:function(e) {return 0; },
        

});
