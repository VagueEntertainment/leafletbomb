Template.teamList.helpers ({

userId:function() {
                
                return Meteor.users.findOne()._id;
            },
            
//docId: function() {
               //return this.docId;
               //   },

team: function() {
                    var id= Meteor.users.findOne()._id;
                return CompanyTeam.find({type:"user"});
            },
            
          
            
           


});


Template.MasterAccount.helpers ({

userId:function() {
                return Meteor.users.findOne()._id;
            },
companyId:function() {
                return Company.findOne().userId;
            },            
            
userName: function() {
                var masterUserId = Company.findOne().userId;
                
                if(CompanyTeam.findOne({userId:masterUserId}) == undefined) {
                
                        return Meteor.users.findOne({_id:masterUserId}).profile.name;
                
                    } else {
                        return CompanyTeam.findOne({userId:masterUserId}).name;                
                    }
                },
                
email: function() {
                var masterUserId = Company.findOne().userId;
                return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                },
                
avatar: function () {
                var masterUserId = Company.findOne().id;
                var file = ""
                         //   Meteor.subscribe('images');
                         //   Meteor.subscribe('companyassets');
                         
                         
                         if(CompanyAssets.findOne({companyId:masterUserId} && { type:"companySPImg"}) != undefined) {
             
                                 file = CompanyAssets.findOne({companyId:masterUserId} && { type:"companySPImg"}).filename;
                                    return '<img  height=96px width=auto src="'+Images.findOne({_id:file}).url()+'"> </img>';
                                 } else {
                                    return '<i for="upload-avatar" style="cursor:pointer;" class="fa fa-user-circle-o fa-5x">';
                                }
                }                            
        
});


Template.maTemplate.helpers ({

    userId:function() {
                return Company.findOne().userId;
            },
    companyId:function() {
                return Company.findOne().userId;
            },            
            
    userName: function() {
                var masterUserId = Company.findOne().userId;
                //return Meteor.users.findOne({_id:masterUserId}).profile.name;
                return CompanyTeam.findOne({userId:masterUserId}).name;
                },
                
    email: function() {
                var masterUserId = Company.findOne().userId;
                //return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                
                return CompanyTeam.findOne({userId:masterUserId}).email;
                },
    url: function() {
                var masterUserId = Company.findOne().userId;
                //return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                
                return CompanyTeam.findOne({userId:masterUserId}).url;

                },
                
    about: function() {
                var masterUserId = Company.findOne().userId;
                //return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                
                return CompanyTeam.findOne({userId:masterUserId}).about;

                }, 
                
    phone: function() {
                var masterUserId = Company.findOne().userId;
                //return Meteor.users.findOne({_id:masterUserId}).emails[0].address;
                
                return CompanyTeam.findOne({userId:masterUserId}).phone;

                },               
                
                
    avatar: function () {
                var masterUserId = Company.findOne().userId;
                var file = "";
                           if( CompanyAssets.findOne({companyId:masterUserId} && { type:"companySPImg"}) != undefined) {
                                file = CompanyAssets.findOne({companyId:masterUserId} && { type:"companySPImg"}).filename;    
                                return '<label for="upload-avatar" style="cursor:pointer;"> <img height=96px width=auto src="'+Images.findOne({_id:file}).url()+'"> </img> </label>';
                            } else {
                                return '<label for="upload-avatar" style="cursor:pointer;"> <i class="fa fa-user-circle-o fa-5x"> </label>';
                            }
                }                              
        
}); 



Template.TeamItem.helpers ({

avatar: function(e) {
            
            if(CompanyTeam.findOne({_id:this._id}).avatar == "") {
            
             return '<label for="upload-avatar" style="cursor:pointer;"> <img height=96px width=auto src="'+Images.findOne({_id:file}).url()+'"> </img> </label>';
                         } else {
                            return '<label for="upload-avatar" style="cursor:pointer;"> <i class="fa fa-user-circle-o fa-5x"> </label>';
                         }

        },
 userid: function(e) {
            return CompanyTeam.findOne({name:this.name})._id;
 
 },
 
 status: function(e) {
            Meteor.subscribe("accounts");
        var theid = CompanyTeam.findOne({email:this.email})._id;
            if(Meteor.users.findOne({emails: {$elemMatch: {address:this.email}}}) == undefined) {
                return "Not Joined";
            } else {
                return "Joined";
                } 
 
 }


});



Template.TeamItem.events ({

    'click .list_Item': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    },
                    
      'click #delete': function(e) {
                        var theid = "#"+$(e.target).find('[name=userid]').val();
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                                    CompanyTeam.remove({"_id":this._id});
                       
                    }              
                    

});

Template.MasterAccount.events ({

        'click .list_Item': function(e) {
                        var theid = "#"+Company.findOne().userId;
                            
                        if($(theid).css('visibility') == 'visible') {
                                $(theid).css('visibility', 'hidden');
                               $(theid).css("animation-name" , "slideOutAnim");
                                } else {
                        $(theid).css('visibility', 'visible');
                       $(theid).css("animation-name" , "slideInAnim");
                                    }
                       
                    },
                    
                    
        
                    

});


Template.teamList.events ({

     'submit #teamform' : function(e) {
                                     e.preventDefault();
                                var theId =  Meteor.users.findOne()._id;
                                var theid = "#"+this._id;
                                
                                
                                
                               
                                console.log("from submit "+ this._id);
                               
                                
                            if(this._id == undefined) {
                          //if(CompanyTeam.find({"name":$(e.target).find('[name=name]').val()}).count() == 0) {
                           
                                     var info = {
                                    companyId:Company.findOne()._id,
                                    name:$(e.target).find('[name=name]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    about:$(e.target).find('[name=about]').val(),
                                    userId:"",
                                    avatar:"",
                                    type:"user"
                                };
                                    
                                CompanyTeam.insert(info); 
                                
                               var memberId = CompanyTeam.findOne({name:$(e.target).find('[name=name]').val()})._id
                                
                                sendinvite($(e.target).find('[name=name]').val(),$(e.target).find('[name=email]').val(),memberId);
                        
                              } else {
                              
                                         var info = {
                                    companyId:Company.findOne()._id,
                                    name:$(e.target).find('[name=name]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    about:$(e.target).find('[name=about]').val(),   
                                };
                                    
                                  // var listId = $(theid).find('[name=userid]').val();
                                         CompanyTeam.update({"_id": this._id},{$set: info}); 
                              }
                              //  var theid = "#"+$(e.target).find('[name=userid]').val();
                                
                                
                                
                            $("#teamaddwindow").css('visibility', 'hidden');
                            $(theid).css('visibility', 'hidden');
                            
                            
                            
                            
                                    },
                                    
                                    
            'click #teamcancel' : function(e) {
                                var theid = "#"+this._id;
                                $("#teamaddwindow").css('visibility', 'hidden');
                                $(theid).css('visibility', 'hidden');
                                
                            
                    },
                    
                     'click #teamadd' : function(e) {
                                $("#teamaddwindow").css('visibility', 'visible');
                            
                    } ,
                    
                    
                    
             'submit #maform' : function(e) {
                                     e.preventDefault();
                                var theId =  Company.findOne().userId;
                                var theid = "#"+this._id;
                            
                                
                                
                            
                           if(CompanyTeam.find({"name":$(e.target).find('[name=name]').val()}).count() == 0) {
                           
                            var info = {
                                    companyId:Company.findOne()._id,
                                    name:$(e.target).find('[name=name]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    about:$(e.target).find('[name=about]').val(),
                                    userId:theId,
                                    type:"master" 
                                };
                                    
                                CompanyTeam.insert(info); 
                        
                              } else {
                              
                                    var info = {
                                    companyId:Company.findOne()._id,
                                    name:$(e.target).find('[name=name]').val(),
                                    email:$(e.target).find('[name=email]').val(),
                                    url:$(e.target).find('[name=url]').val(),
                                    phone:$(e.target).find('[name=phone]').val(),
                                    about:$(e.target).find('[name=about]').val(),
                                    userId:theId,
                                     
                                };
                                    
                                   var listId = $(theid).find('[name=userid]').val();
                                         CompanyTeam.update({"_id": listId},{$set: info}); 
                              }
                              //  var theid = "#"+$(e.target).find('[name=userid]').val();
                                var theId = "#"+Company.findOne().userId;
                            $("#teamaddwindow").css('visibility', 'hidden');
                            $(theId).css('visibility', 'hidden');
                            
                                    },       
                   
                    
                    'click #macancel' : function(e) {
                                 var theid = "#"+Company.findOne().userId;
                                
                                $(theid).css('visibility', 'hidden');
                                
                            
                    },
                    
                    'change .SPImgInput': function(event, template) {
                            var files = event.target.files;
    
                            var theId = Company.findOne()._id;
         
                            for (var i = 0, ln = files.length; i < ln; i++) {
                                  Images.insert(files[i], function (err, fileObj) {
                               if (err) {
          
                                    } else {
                                        var info = {
                                              companyId:theId,
                                                 type:"companySPImg",
                                               filename:fileObj._id
                                            };
                                 
            
                             if(CompanyAssets.findOne({companyId:theId} && {type:"companySPImg"}) == undefined) {           
                                    CompanyAssets.insert(info);
                            } else {
                                  var assId = CompanyAssets.findOne({companyId:theId} && {type:"companySPImg"})._id;
                               CompanyAssets.update({"_id": assId},{$set: info});
                    
                             }
                    }
        
            
                     }); 
                 }
  }                     

});


function sendinvite(name,emailaddress,memberId) {

                            var thename = name.replace(/" "/g,"%20");
                           
                            var title = "Join Request";
                            var reply = CompanyTeam.findOne({type:"master"}).email;
                            var company = Company.findOne().companyName;
                            
                            var companyId = Company.findOne().userId;
                            
                            Meteor.call(
                                    'sendEmail',
                                     name +"<"+emailaddress+">",
                                    reply,
                                    title+' - '+company,
                                    `<h1>`+title+`</h1> </br><br/>
                                        <br/><br/>
  To join the team <a href=http://`+window.location.hostname+`:`+window.location.port+`/JoinTeam/?company=`+companyId+`&accounttype=teamMember&email=`+emailaddress+`&name=`+thename+`>Click Here<a>`
                                     
                                    ); 
                        
                       
  }




