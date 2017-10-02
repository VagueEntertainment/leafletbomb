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
           
            
