//var schedule = later.parse.recur().on(5).minute(); // on fifth minute of every hour, every day
var schedule = later.parse.recur().every(1).minute(); // on fifth minute of every hour, every day
var hourlyEmailer = new ScheduledTask(schedule, checkScheduledPosts);


Meteor.startup(function () {
  hourlyEmailer.start();
});


function checkScheduledPosts() {

  var test = Company.findOne()._id;
  var scheduled = Posts.find({status:1}).count();
  
    var d = new Date();
                                var theday = "";
                                var themonth = "";
                        
                                    if(d.getDate() < 10) {
                                        theday = "0"+d.getDate();
                                      } else {
                                        theday = d.getDate();
                                      }
                            
                                    if((d.getMonth() + 1) < 10) {
                                        themonth = "0"+(d.getMonth() + 1);
                                     } else {
                                        themonth = (d.getMonth() + 1);
                                     }
                            
                               var theDate = themonth+'/'+theday+'/'+(d.getFullYear()); 
  
  
  
 // console.log("this is the company id "+test);
  
  //console.log("This company has "+scheduled+" releases");
  
 // console.log("Todays date " + theDate);   
  
  for(var num = 0; num < Posts.find({status:1}).count(); num = num + 1) {
  
//  console.log(Posts.find({status:1}).fetch()[num].title+" to be released on "+ Posts.find({status:1}).fetch()[num].releasedate);
                            
     if(Posts.find({status:1}).fetch()[num].releasedate == theDate) {
    //    console.log("Releasing PR!!!");
        var docid = Posts.find({status:1}).fetch()[num]._id;
                                    
                                    var statusupdate = {
                                                            status:2
                                                            
                                                       };
        
        sendthemall(Posts.find({status:1}).fetch()[num].docId);
        
        Posts.update({"_id": docid},{$set:statusupdate});
        
     } else {
   //     console.log("Not releasing yet");
     }
                            
  
  }


}


function sendthemall(docId) {
       

 for(var PDnum = 0;PDnum < PostDistribution.findOne({docId:docId}).list.length;PDnum = PDnum+1) {
                         var listnum = 0;  
                         var listId = [];
                         var list = [];
                            if( PostDistribution.findOne({docId:docId}) != undefined) {
                                 listId = PostDistribution.findOne({docId:docId}).list[PDnum]; 
                                 
                                
                         }
                            //    console.log(DistributionLists.findOne());
                            if(DistributionLists.findOne({_id:listId}) != undefined) {
                                list= DistributionLists.findOne({_id:listId}).list;
                                
                                
                            }
                        
                        while(listnum < list.length) {
                            var name = Influencers.findOne({_id:list[listnum]}).Name;
                            
                        //    console.log(name);
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


