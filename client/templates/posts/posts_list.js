Template.postsList.helpers({
   posts: function(e) {
                
                if(Posts.find().count() == 0) {
                        Router.go("/");
                        } else {
                           
                            var d = new Date();
                            var testDate = (d.getMonth() + 1)+"-"+d.getDate()+"-"+(d.getFullYear() + 1);
                            
                                return Posts.find({ status:2 }, {sort:{releasedate: -1}});
                            
                        }
            } 
            });
            
Template.postsList.rendered=function() {

       var influencer = "";
       
        if(Router.current().params.query.inf != undefined) {
         influencer = Router.current().params.query.inf;
         var influencername = Influencers.findOne({_id:influencer}).Name;
         var id = PostEngage.findOne({docId:this.docId} && {influencerName:influencername})._id;
            console.log("from stuff "+id);
            var seen = {
                        seen:1
                        };
                        
            PostEngage.update({_id:id}, {$set:seen});
        }


}
           
            
