Template.postsList.helpers({
   posts: function() {
   
                var docId= Router.current().url.split("/")[Router.current().url.split("/").length -1].split("?")[0];
                    
                if(Posts.find().count() == 0) {
                        return Posts.findOne();
                        } else {
                           
                            var d = new Date();
                            var testDate = (d.getMonth() + 1)+"-"+d.getDate()+"-"+(d.getFullYear() + 1);
                                if(docId == undefined) {
                                return Posts.find({ status:2 }, {sort:{releasedate: -1}});
                                } else {
                                
                                return Posts.find({docId:docId}, {sort:{releasedate: -1}});
                                }
                        }
            } ,
            
       
            
            });
            
/*Template.postsList.rendered=function() {

       var influencer = "";
       var docId= Router.current().url.split("/")[Router.current().url.split("/").length -1].split("?")[0];
         
        if(Router.current().params.query.inf != undefined) {
         influencer = Router.current().params.query.inf;
         var influencername = Influencers.findOne({_id:influencer}).Name;
         var id = PostEngage.findOne({docId:docId} && {influencerName:influencername})._id;
            console.log("from stuff "+id);
            var seen = {
                        seen:1
                        };
                        
            PostEngage.update({_id:id}, {$set:seen});
        }


} */
           
            
