function sendthemall(docid) {


 for(var PDnum = 0;PDnum < PostDistribution.findOne({docId:docId}).list.length;PDnum = PDnum+1) {
                         var listnum = 0;  
                         var listId = [];
                         var list = [];
                            if( PostDistribution.findOne({docId:docId}) != undefined) {
                                 listId = PostDistribution.findOne({docId:docId}).list[PDnum];    
                         }
                            if(DistributionLists.findOne({_id:listId}) != undefined) {
                                list= DistributionLists.findOne({_id:listId}).list;
                            }
                        
                        while(listnum < list.length) {
                            var name = Influencers.findOne({_id:list[listnum]}).Name;
                            var emailaddress = Influencers.findOne({_id:list[listnum]}).email;
                             var title = this.title;
                             var tagline = this.tagline;
                             var company = Company.findOne().companyName;
                            var text = DistributionLists.findOne({_id:listId}).message +"\n\n"+ this.release;
       
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
                    if(PostEngage.findOne({docId:docId} , {influencerEmail:emailaddress}) == undefined) {                    
                           PostEngage.insert(engage);                 
                                 
                            Meteor.call(
                                    'sendEmail',
                                     name +"<"+emailaddress+">",
                                    'No Reply <noreply@vagueentertainment.com>',
                                    title+' - '+company,
                                    `<h1>`+title+`</h1> <h3>`+tagline+`</h3> </br><br/>
                                        To be release on: `+this.releasedate+` <br/><br/>
                                      `+fullRelease+` <br/><br/>
                                      For full release <a href=http://`+window.location.hostname+`:3000/release/`+docId+`?inf=`+list[listnum]+`>Click Here<a>`
                                     
                                    ); 
                        
                        }
                        
                        listnum = listnum + 1;
                        }
                    }
  }
                        
                       
