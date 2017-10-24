Template.marketerSetup.rendered=function(e) {

$('#slide1').css("animation-name" , "wizardIn");

}

Template.marketerSetup.helpers ({

  userId: function() {return Meteor.users.findOne()._id;},
  companyLogo:function() { 
                          var file = CompanyAssets.findOne({"companyId":Company.findOne()._id, "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
   },
  companyLogoSmall:function(){
                            Meteor.subscribe('images');
                        Meteor.subscribe('companyassets');
                            var file = CompanyAssets.findOne({"companyId":Company.findOne()._id , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
    
   },
   companySPImg:function(){
                            Meteor.subscribe('images');
                        Meteor.subscribe('companyassets');
                            var file = CompanyAssets.findOne({"companyId":Company.findOne()._id, "type":"companySPImg"}).filename;
                          return Images.findOne({_id:file}).url();
   },
   
   companyName:function() {return Company.findOne().companyName;},
       
        companyAddress:function() {return Company.findOne().companyAddress; },
        companyCity:function() {return Company.findOne().companyCity; },
        companyState:function() {return Company.findOne().companyState; },
        companyCountry:function() {return Company.findOne().companyCountry; },
        companyPhone:function() {return Company.findOne().companyPhone; },
        companySP:function() {return Company.findOne().companySP; },
        category:function() {return Company.findOne().category; },
        about:function() {return Company.findOne().about; },
        url:function() {return Company.findOne().url; },
        email:function() {return Company.findOne().email; },
        twitter:function() {return Company.findOne().twitter; },
        facebook:function() {return Company.findOne().facebook; },
        category:function() {return Company.findOne().category; },
        keywords:function() {return Company.findOne().keywords; },
        othersites:function() {return Company.findOne().othersites; },
        accountType:function() {return Company.findOne().accountType; },
        
        
        wherewego: function() {
                                if(Router.current().params.query.edit === undefined) { 
                                     return "AccountsTemplates.logout()";
                                     } else {
                                     
                                     return "Router.go('/dashboard/'+Meteor.users.findOne()._id)";
                                     }       
        
        
        }
   

    
});

Template.influencerSetup.helpers ({

    userId: function() {return Meteor.users.findOne()._id;},
    
    companyLogo:function() { 
                          var file = CompanyAssets.findOne({"companyId":Meteor.userId() , "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
   },
  companyLogoSmall:function(){
                            var file = CompanyAssets.findOne({"companyId":Meteor.userId() , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
    
   },
   companySPImg:function(){
                            var file = CompanyAssets.findOne({"companyId":Meteor.userId() , "type":"companySPImg"}).filename;
                          return Images.findOne({_id:file}).url();
   }

});

Template.marketerSetup.events ({


'submit form': function(e) {
            e.preventDefault();
     
       
    Router.go('/dashboard/'+Meteor.users.findOne()._id);
    

},

'click #next' : function (e) {

                
                if( ($(window).width() * 0.26) - $("#slide1").css("right").split("px")[0] < 1) {
                    $('#slide1').css("animation-name" , "wizardOut");
                    $('#slide2').css("animation-name" , "wizardIn");
                    
                }
                
                 if(($(window).width() * 0.26) - $("#slide2").css("right").split("px")[0] < 1) {
                    $('#slide2').css("animation-name" , "wizardOut");
                    $('#slide3').css("animation-name" , "wizardIn");
                    
                }
                
                  if(($(window).width() * 0.26) - $("#slide3").css("right").split("px")[0] < 1) {
                    $('#slide3').css("animation-name" , "wizardOut");
                    $('#slide4').css("animation-name" , "wizardIn");
                    
                }
                
                  if(($(window).width() * 0.26) - $("#slide4").css("right").split("px")[0] < 1) {
                    $('#slide4').css("animation-name" , "wizardOut");
                    $('#slide5').css("animation-name" , "wizardIn");
                   
                    
                }
                
                  if( ($(window).width() * 0.26) - $("#slide5").css("right").split("px")[0] < 1) {
                    $('#slide5').css("animation-name" , "wizardOut");
                    $('#slide6').css("animation-name" , "wizardIn");
                     make_company(e);
                }
              

},


'click #back' : function (e) {

                
                if( ($(window).width() * 0.26) - $("#slide2").css("right").split("px")[0] < 1) {
                    $('#slide2').css("animation-name" , "wizardRe");
                    $('#slide1').css("animation-name" , "wizardBack");
                    
                }
                
                 if(($(window).width() * 0.26) - $("#slide3").css("right").split("px")[0] < 1) {
                    $('#slide3').css("animation-name" , "wizardRe");
                    $('#slide2').css("animation-name" , "wizardBack");
                    
                }
                
                  if(($(window).width() * 0.26) - $("#slide4").css("right").split("px")[0] < 1) {
                    $('#slide4').css("animation-name" , "wizardRe");
                    $('#slide3').css("animation-name" , "wizardBack");
                    
                }
                
                 if(($(window).width() * 0.26) - $("#slide5").css("right").split("px")[0] < 1) {
                    $('#slide5').css("animation-name" , "wizardRe");
                    $('#slide4').css("animation-name" , "wizardBack");
                    
                    
                }
                
                  if( ($(window).width() * 0.26) - $("#slide6").css("right").split("px")[0] < 1) {
                    $('#slide6').css("animation-name" , "wizardRe");
                    $('#slide5').css("animation-name" , "wizardBack");
                    
                } 
              

},

'change .LogoInput': function(event, template) {
    var files = event.target.files;
    
     var theId = Company.findOne()._id;
    
   
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    companyId:theId,
                    type:"companyLogo",
                   filename:fileObj._id
            };
            
           // console.log(info);
            
            if(CompanyAssets.findOne({companyId:theId} && {type:"companyLogo"}) == undefined) {           
                    CompanyAssets.insert(info);
                    } else {
                        var assId = CompanyAssets.findOne({companyId:theId})._id;
                        CompanyAssets.update({"_id": assId},{$set: info});
                    
                    }
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      }); 
    }
  },
'change .LogoSmallInput': function(event, template) {
    var files = event.target.files;
    
    var theId = Company.findOne()._id;
    
    
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    companyId:theId,
                    type:"companyLogoSmall",
                   filename:fileObj._id
            };
            
            
            
            if(CompanyAssets.findOne({companyId:theId} && {type:"companyLogoSmall"}) == undefined) {           
                    CompanyAssets.insert(info);
                    } else {
                        var assId = CompanyAssets.findOne({companyId:theId})._id;
                        CompanyAssets.update({"_id": assId},{$set: info});
                    
                    }
                    
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      }); 
    }
  },     
      
      
      
 'change .SPImgInput': function(event, template) {
    var files = event.target.files;
    
    var theId = Meteor.userId();
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    companyId:theId,
                    type:"companySPImg",
                   filename:fileObj._id
            };
            CompanyAssets.insert(info);
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      }); 
      }
  } 
      

});

Template.influencerSetup.events ({


'submit form': function(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
    var info = {
    
        userId:theId,
        companyName:$(e.target).find('[name=companyName]').val(),
        companyLogo:CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogo"}).filename,
        companyLogoSmall:CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogoSmall"}).filename,
        companyAddress:$(e.target).find('[name=companyAddress]').val(),
        companyCity:$(e.target).find('[name=companyCity]').val(),
        companyState:$(e.target).find('[name=companyState]').val(),
        companyCountry:$(e.target).find('[name=companyCountry]').val(),
        companyPhone:$(e.target).find('[name=companyPhone]').val(),
        companySP:$(e.target).find('[name=companySP]').val(),
        companySPImg:CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companySPImg"}).filename,
        about:$(e.target).find('[name=about]').val(),
        url:$(e.target).find('[name=url]').val(),
        email:$(e.target).find('[name=email]').val(),
        twitter:$(e.target).find('[name=twitter]').val(),
        facebook:$(e.target).find('[name=facebook]').val(),
        category:$(e.target).find('[name=category]').val(),
        keywords:$(e.target).find('[name=keywords]').val(),
        othersites:$(e.target).find('[name=othersites]').val(),
        accountType:"influencer"
    };
    
    Company.insert(info);
    
    Router.go("/influence/"+theId);
},

'change .LogoInput': function(event, template) {
    var files = event.target.files;
    
    var theId = Meteor.userId();
    
   
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    companyId:theId,
                    type:"companyLogo",
                   filename:fileObj._id
            };
            CompanyAssets.insert(info);
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      }); 
    }
  },
'change .LogoSmallInput': function(event, template) {
    var files = event.target.files;
    
    var theId = Meteor.userId();
    
    
     
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        if (err) {
        
        } else {
            var info = {
                    companyId:theId,
                    type:"companyLogoSmall",
                   filename:fileObj._id
            };
            CompanyAssets.insert(info);
          }
        
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      }); 
    }
  }



});



 function make_company(e) {
            e.preventDefault();
                var theId =  Meteor.users.findOne()._id;
                
                if(Router.current().params.query.edit === undefined) { 
    var info = {
    
        userId:theId,
        companyName:$("#setupForm").find('[name=companyName]').val(),
        companyLogo:"",
        companyLogoSmall:"",
        companyAddress:$("#setupForm").find('[name=companyAddress]').val(),
        companyCity:$("#setupForm").find('[name=companyCity]').val(),
        companyState:$("#setupForm").find('[name=companyState]').val(),
        companyCountry:$("#setupForm").find('[name=companyCountry]').val(),
        companyPhone:$("#setupForm").find('[name=companyPhone]').val(),
        companySP:"",
        companySPImg:"",
        about:$("#setupForm").find('[name=about]').val(),
        url:$("#setupForm").find('[name=url]').val(),
        email:$("#setupForm").find('[name=email]').val(),
        twitter:$("#setupForm").find('[name=twitter]').val(),
        facebook:$("#setupForm").find('[name=facebook]').val(),
        category:$("#setupForm").find('[name=category]').val(),
        keywords:$("#setupForm").find('[name=keywords]').val(),
        othersites:$("#setupForm").find('[name=othersites]').val(),
        accountType:"marketer"
    };
    
    Company.insert(info);
    
    } else {
        
        var listId = Company.findOne()._id;
    
        var info = {
    
        //userId:theId,
        companyName:$("#setupForm").find('[name=companyName]').val(),
        companyLogo:CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogo"}).filename,
        companyLogoSmall:CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogoSmall"}).filename,
        companyAddress:$("#setupForm").find('[name=companyAddress]').val(),
        companyCity:$("#setupForm").find('[name=companyCity]').val(),
        companyState:$("#setupForm").find('[name=companyState]').val(),
        companyCountry:$("#setupForm").find('[name=companyCountry]').val(),
        companyPhone:$("#setupForm").find('[name=companyPhone]').val(),
        companySP:"",
        companySPImg:"",
        about:$("#setupForm").find('[name=about]').val(),
        url:$("#setupForm").find('[name=url]').val(),
        email:$("#setupForm").find('[name=email]').val(),
        twitter:$("#setupForm").find('[name=twitter]').val(),
        facebook:$("#setupForm").find('[name=facebook]').val(),
        category:$("#setupForm").find('[name=category]').val(),
        keywords:$("#setupForm").find('[name=keywords]').val(),
        othersites:$("#setupForm").find('[name=othersites]').val(),
       // accountType:"marketer"
    };
    
    Company.update({"_id": listId},{$set: info});
    
    }
       
         var emailinfo = {
                            companyId:Company.findOne()._id,
                            fromWho:$("#setupForm").find('[name=companyName]').val(),
                            respondTo:$("#setupForm").find('[name=email]').val(),
                            type:"email"
                    
                        };
                        
                        if(Settings.findOne({type:"email"}) == undefined) {
                        
                            Settings.insert(emailinfo);
                        
                        } else {
                            Settings.update({_id:Settings.findOne({type:"email"})._id},{$set:emailinfo});
                        }
                        
                        
                         var theId =  Company.findOne().userId;
                         var theid = "#"+this._id;
                        
                        
      if(CompanyTeam.find({"name":$('#setupForm').find('[name=name]').val()}).count() == 0) {
                           
                            var info = {
                                    companyId:Company.findOne()._id,
                                    name:Meteor.user().profile.name,
                                    email:Meteor.user().emails[0].address,
                                    url:$('#setupForm').find('[name=url]').val(),
                                    phone:$('#setupForm').find('[name=companyPhone]').val(),
                                    about:"",
                                    userId:theId,
                                    type:"master" 
                                };
                                    
                                CompanyTeam.insert(info); 
                        
                              } else {
                              
                                    var info = {
                                    companyId:Company.findOne()._id,
                                    name:Meteor.user().profile.name,
                                    email:Meteor.user().emails[0].address,
                                    url:$('#setupForm').find('[name=url]').val(),
                                    phone:$('#setupForm').find('[name=companyPhone]').val(),
                                    about:"",
                                    userId:theId,
                                     
                                };
                                    
                                   var listId = $(theid).find('[name=userid]').val();
                                         CompanyTeam.update({"_id": listId},{$set: info}); 
                              }                     

}
