Template.DashpostItem.helpers ( {
    
       /* This needs to be done in one or two lines. But I'm using a hammer today. Tommorow
            I'll use a scalpel */
            
            pubstatus: function(e) { 
                            switch(this.status) {
                                case 0: {
                                        $('#seen').css('visibility','hidden');
                                        $("#question").css('visibility', 'hidden');
                                return "Draft";}
                                
                                break;
                                case 1: {
                                         $('#seen').css('visibility','hidden');
                                        $("#question").css('visibility', 'hidden');
                                
                                return "Scheduled";}
                                            break;
                                case 2: return "Published";break;
                                case 3: return "Archived";break;
                                case 4: return "Trashed";break;
                                default: return "No value";break;
                            }
            
                            },
                            
             action: function(e) {
                        switch(this.status) {
                            case 0: return "Schedule";break;
                            case 1: return "Publish"; break;
                            case 2: return "Send"; break;
                        }
                      
             },
            
            document: function(e) {
                                  return this.docId;},
     companyName: function() {
       Meteor.subscribe('companies',this.userId);
        return Company.findOne({userId:this.userId}).companyName;
        },
       companyAddress: function() {
        
        return Company.findOne({userId:this.userId}).companyAddress;
        },
        companyLogo: function() {
                        var file = CompanyAssets.findOne({"companyId":this.userId , "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
        
        },
        
        companyLogoSmall:function() {
                            var file = CompanyAssets.findOne({"companyId":this.userId , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
        
        },
        
        publicaddress: function() {
                    var text = "<a href=http://localhost:3000/release/"+this._Id+">Click Here<a>";
                  return text;
        },
         
        url:function() {
        
        return Company.findOne({userId:this.userId}).url;
        },
        
        asset1: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[0];
             //return thefiles;
            
        },
         asset2: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[1];
             //return thefiles;
            
        },
         asset3: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[2];
             //return thefiles;
            
        },
         asset4: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[3];
             //return thefiles;
            
        } ,
        asset5: function () {
                Meteor.subscribe('postassets');
                Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[4];
             //return thefiles;
            
        },
        
        
        
        releasechanged: function() { 
        
                var text = this.release;
       
          text = text.replace(/\n/g, "<br/>");
          
          text = text.replace(/{{/g, "<img src='{{");
          
          
          
          text = text.replace(/}}/g, "' alt='' class='thumbnail' />");
          
      
        // Replace quotations as a quote block //
       
          
          
          var quoteCutter = text.split('"');
          var quotenum = 1;
          text = quoteCutter[0];
          while(quotenum < quoteCutter.length) {
                        if(quotenum % 2 != 0) {
                text = text+"<div class='postquote'><p>"+quoteCutter[quotenum]+'</b></div><br/>';
                } else {
                    text = text+quoteCutter[quotenum];
                    }
          
          
            quotenum = quotenum + 1;
          }
      
      
        //End Quote check//
        //Splits and rejoins text based on the citation of the quotes//
        text = text.split("---");
        var num = 1;
        var fullRelease = text[0];
        while(num < text.length) {
                if(num % 2 != 0) {
                fullRelease = fullRelease+'<div class="postcite"><b>'+text[num]+'</b></div><br/>';
                } else {
                    fullRelease = fullRelease+text[num];
                    }
                
            num = num + 1;
        }
        //End citation check //
        
        
        
        
        return fullRelease;
},
       
       emaillist: function() {
                   return DistributionLists.find().count();
       
        
       }
        
        
        
        /* End of ugly code */
        
});


Template.DashpostItem.events ({

           'click .postAction': function (e) {
           
                    switch(this.status) {
                        case 2: {
                    var listnum = 0;
                   var list= DistributionLists.find().fetch()[0].list;
                   
                   while(listnum < list.length) {
                   var name = Influencers.findOne({_id:list[listnum]}).Name;
                   var emailaddress = Influencers.findOne({_id:list[listnum]}).email;
                    var title = this.title;
                    var tagline = this.tagline;
                    var company = Company.findOne().companyName;
                    var text = DistributionLists.find().fetch()[0].message +"\n\n"+ this.release;
       
                             text = text.replace(/\n/g, "<br/>");
      
                            // Replace quotations as a quote block //
       
          
          
                            var quoteCutter = text.split('"');
                             var quotenum = 1;
                            text = quoteCutter[0];
                         while(quotenum < quoteCutter.length) {
                                   if(quotenum % 2 != 0) {
                                        text = text+"<div class='postquote'><p>"+quoteCutter[quotenum]+'</b></div><br/>';
                                    } else {
                                          text = text+quoteCutter[quotenum];
                                }
          
          
                        quotenum = quotenum + 1;
                        }
      
      
                        //End Quote check//
                                //Splits and rejoins text based on the citation of the quotes//
                         text = text.split("---");
                        var num = 1;
                        var fullRelease = text[0];
                         while(num < text.length) {
                                   if(num % 2 != 0) {
                                          fullRelease = fullRelease+'<div class="postcite"><b>'+text[num]+'</b></div><br/>';
                                      } else {
                                          fullRelease = fullRelease+text[num];
                                         }
                
                            num = num + 1;
                             }
                         //End citation check //
       

                    Meteor.call(
                        'sendEmail',
                        name +"<"+emailaddress+">",
                        'No Reply <noreply@vagueentertainment.com>',
                        title+' - '+company,
                         `<h1>`+title+`</h1> <h3>`+tagline+`</h3> </br><br/>
                         To be release on: `+this.releasedate+` <br/><br/>
                            `+fullRelease+` <br/><br/>
                        For full release {{publicaddress}}`
                         
                        );
                        
                        listnum = listnum + 1;
                        }
                        
                        } break;
                        
                        case 0: {var listId = Posts.findOne({"docId":this.docId})._id;
                                Posts.update({"_id":listId},{$set: {status:1}}); } break;
                        case 1: {var listId = Posts.findOne({"docId":this.docId})._id;
                                Posts.update({"_id":listId},{$set: {status:2}}); } break;
                        case 3: {var listId = Posts.findOne({"docId":this.docId})._id;
                                Posts.update({"_id":listId},{$set: {status:2}});} break;
                        
                        }
                     
                    },
                    
           'click #edit' : function(e) {
           
                                Router.go('/dashboard/'+this.userId+'/newPressRelease?edit='+this.docId);
           
                            },
                            
           'click #delete' : function(e) {
                                 var listId = Posts.findOne({"docId":this.docId})._id;
                                Posts.update({"_id":listId},{$set: {status:4}});
           
                            }
                        


});


