Template.contactsImportTemplate.helpers ({


supported:function() {
                    
                    // Check for the various File API support.
                if (window.File && window.FileReader && window.FileList && window.Blob) {
                    return ("Great success! All the File APIs are supported.");
                } else {
                 return ('The File APIs are not fully supported in this browser.');
                }
                },

contactsImportlist: function() {
                          var list = [];
                          var selected = 0;
                          var listindex = 0;
                          Import.find().forEach( function(stuff) {
                   
                                   list[listindex] = ({"_id":stuff._id, "Name":stuff.Name , "companyName":stuff.companyName, "email":stuff.email, "url":stuff.url});
                                      
                                   
                                listindex = listindex +1;
                           });
                                   
                          return list;  
                        
                        
                    }


});


Template.contactsImportTemplate.events ({

            'click #CIDsubmit' : function(e) {
                                     e.preventDefault();
                                     
                                   Import.find().forEach( function(stuff) {
                   
                                   //list[listindex] = ({"_id":stuff._id, "Name":stuff.Name , "companyName":stuff.companyName, "email":stuff.email, "url":stuff.url});
                                      
                                       var info = {
    
                                    Name:stuff.Name,
                                    phone:"",
                                    companyName:stuff.companyName,
                                    email:stuff.email,
                                    url:stuff.url,
                                    address:stuff.address,
                                    state:stuff.state,
                                    country:"",
                                    notes:"",
                                    type:"PR"
                                                 };
                                                 
                                         console.log(info);        
                                       if(Influencers.findOne({"Name":stuff.Name}) == undefined) {
                                console.log("Creating New "+stuff.Name);
                                Influencers.insert(info);
                        
                              } else {
                                    console.log("Updating "+stuff.Name);
                                    console.log(info);
                                         Influencers.update({"Name": stuff.Name},{$set: info}); 
                              }
                                      
                                     
                                    }); 
                         
                                
                            $("#contactImportwindow").css('visibility', 'hidden');
                          
                            
                                    },       
                   
                    
                    'click #CIDcancel' : function(e) {
                                 //var theid = "#"+Company.findOne().userId;
                                $("#contactImportwindow").css('visibility', 'hidden');
                               // $("#CIDcancel").css('visibility', 'hidden');
                               
                               Import.find().forEach( function(stuff) {
                               
                                Import.remove({"_id":stuff._id});
                               
                               });
                                
                            
                    },
                    
                    'change #files': function(event, template) {
                            var files = event.target.files;
    
                            //var theId = Company.findOne()._id;
                            var blob = files[0];
                           // console.log(blob);
         
                            var reader = new FileReader();
                                    reader.onloadend = function(evt) {
                                        if (evt.target.readyState == FileReader.DONE) {
                                               // console.log(evt.target.readyState);
                                                 var results = evt.target.result.split("\n");
                                                      //console.log(results[0]);
                                                      
                                 for (var num =0;results.length > num;num = num+1) {                     
                                              var result = results[num].split(";");        
                             var info = {
    
                                    Name:result[2],
                                    phone:"",
                                    companyName:result[0],
                                    email:result[3],
                                    url:result[1],
                                    address:result[5],
                                    state:result[6],
                                    country:"",
                                    notes:"",
                                    type:"PR"
                                                 };
                                                 
                                                 
                                  if(Import.findOne({"Name":result[2]}) == undefined) {
                                //console.log("Creating New "+result[1]);
                                Import.insert(info);
                        
                              } else {
                                   // console.log("Updating "+result[1]);
                                   // console.log(info);
                                         Import.update({"Name":result[2]},{$set: info}); 
                              }
                              
                              
                                        }                                            
                            
                                                     
                                      }
                                     
                                   }
                                
                                reader.readAsBinaryString(blob);
                                
                                
            }


});
