Template.influencerCtrl.helpers ({

   posts: function() {
               var docId= Router.current().url.split("/")[Router.current().url.split("/").length -1].split("?")[0];
               //return Posts.find({ status:2 }, {sort:{releasedate: -1}});
                return Posts.find({docId:docId});
                            
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


Template.influencerCtrlMenu.helpers ({


    avatar: function() {

        var id = Router.current().params.docId;
        
        
        
     var md5Hash = Gravatar.hash(Influencers.findOne({_id:id}).email);
    return `<img height=200 width=auto class="img-rounded" src='https://www.gravatar.com/avatar/`+md5Hash+`?s=200' > </img>`;
    
    },
    
    Name: function() {
                    var id = Router.current().params.docId;
                    return Influencers.findOne({_id:id}).Name;
                    },
                
    companyName: function() {
                    var id = Router.current().params.docId;
                    return Influencers.findOne({_id:id}).companyName;
                    },
                    
    phone: function() {
                    var id = Router.current().params.docId;
                    return Influencers.findOne({_id:id}).phone;
    
                    },
    email: function() {
                    var id = Router.current().params.docId;
                    return Influencers.findOne({_id:id}).email;
    
                    },
    address: function() {
                    var id = Router.current().params.docId;
                    return Influencers.findOne({_id:id}).address;
    
                    },                
                                                                                 

});



Template.influencerCtrlMenu.events ({


    'click #backbutton': function(e) {
                               
                            Router.go('/dashboard/'+Router.current().params.userId);
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
                                    
                                  //  console.log(docid);
                                    var statusupdate = {
                                                            status:2
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate });
                                    
                                    $('#publishopts').css('visibility', 'hidden');
                                    
                                     sendthemall(doc);        
                                 
      
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

Template.influencerCtrlMenu.events ({

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

function sendthemall(docId) {
       

 for(var PDnum = 0;PDnum < PostDistribution.findOne({docId:docId}).list.length;PDnum = PDnum+1) {
                         var listnum = 0;  
                         var listId = [];
                         var list = [];
                            if( PostDistribution.findOne({docId:docId}) != undefined) {
                                 listId = PostDistribution.findOne({docId:docId}).list[PDnum]; 
                                 
                                
                         }
                                console.log(DistributionLists.findOne());
                            if(DistributionLists.findOne({_id:listId}) != undefined) {
                                list= DistributionLists.findOne({_id:listId}).list;
                                
                                
                            }
                        
                        while(listnum < list.length) {
                            var name = Influencers.findOne({_id:list[listnum]}).Name;
                            
                            console.log(name);
                            var emailaddress = Influencers.findOne({_id:list[listnum]}).email;
                             var title = Posts.findOne({docId:docId}).title;
                             var tagline = Posts.findOne({docId:docId}).tagline;
                             var company = Company.findOne().companyName;
                            var text = Influencers.findOne({_id:list[listnum]}).notes+ "\n\n"+DistributionLists.findOne({_id:listId}).message +"\n\n"+ Posts.findOne({docId:docId}).release;
       
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
                            
                            var engage = {
                                            docId:docId,
                                            influencerName:name,
                                            influencerEmail:emailaddress,
                                            opened:0,
                                            seen:0,
                                            questions:""
                                            
                                        };
                                        var reply = Settings.findOne({type:"email"}).fromWho+" <"+Settings.findOne({type:"email"}).respondTo+">";
                                        //console.log(reply);
                    if(PostEngage.findOne({docId:docId} && {influencerEmail:emailaddress}) == undefined) {                    
                           PostEngage.insert(engage);                 
                                 
                            Meteor.call(
                                    'sendEmail',
                                     name +"<"+emailaddress+">",
                                    reply,
                                    title+' - '+company,
                                    `<h1>`+title+`</h1> <h3>`+tagline+`</h3> </br><br/>
                                       
                                        To be release on: `+Posts.findOne({docId:docId}).releasedate+` <br/><br/>
                                      `+fullRelease+` <br/><br/>
                                      For full release <a href=http://`+window.location.hostname+`:3000/release/`+docId+`?inf=`+list[listnum]+`>Click Here<a>`
                                     
                                    ); 
                        
                        }
                        
                        listnum = listnum + 1;
                        }
                    }
  }
  
  // <img src=“http://`+window.location.hostname+`:3000/mail/`+docId+`?inf=`+list[listnum]`” width=“0” height=“0”>
  
function document(release) {

var text = release;
       
       
       
       var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
        
          
         // text = text.replace(/\*/g, "<li>");
          
          //Finds bullets  (BROKEN AT THE MOMENT///
       /*    var bullets = text.split('*');
           var bulletlist = "";
          var bulletnum = 1;
          bulletlist = bullets[0];
          while(bulletnum < bullets.length) {
         
                    var breakout = bullets[bulletnum].split("\n")[0];
                bulletlist = bulletlist+"<li>"+breakout+"</li>";                        
                    
            bulletnum = bulletnum + 1;
          }
          
          text = bulletlist + bullets[bulletnum -1].slice(10);
          
          */
          
          text = text.replace(/\n/g, "<br/>");
      
          text = text.replace(/{{asset1}}/g, "<img  src='"+thefiles[0]+"' class='postimg' />");
          
           text = text.replace(/{{asset2}}/g, "<img  src='"+thefiles[1]+"' class='postimg' />");
           
           text = text.replace(/{{asset3}}/g, "<img  src='"+thefiles[2]+"' class='postimg' />");
          
           text = text.replace(/{{asset4}}/g, "<img  src='"+thefiles[3]+"' class='postimg' />");
           
            text = text.replace(/{{asset5}}/g, "<img  src='"+thefiles[4]+"' class='postimg' />");
          
          
          var quoteCutter = text.split('"');
          var quotenum = 1;
          text = quoteCutter[0];
          while(quotenum < quoteCutter.length) {
                        if(quotenum % 2 != 0) {
                text = text+"<br/><div style='width:10px;height:100%;color:#fff;float:left'> </div> <div class='postquote'><p>"+quoteCutter[quotenum]+'</b></div><br/>';
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
}
