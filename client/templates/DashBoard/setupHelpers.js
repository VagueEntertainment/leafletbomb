Template.marketerSettings.helpers ({

  userId: function() {return Meteor.users.findOne()._id;},
  companyLogo:function() { 
                          var file = CompanyAssets.findOne({"companyId":Meteor.userId(), "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
   },
  companyLogoSmall:function(){
                            var file = CompanyAssets.findOne({"companyId":Meteor.userId() , "type":"companyLogoSmall"}).filename;
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
                                     return '$("#dashboard_CompanyConfig").css("animation-name" , "slideOutAnim");$("#DashboardSidebar").css("visibility", "visible"); $("#SettingsSidebar").css("visibility", "hidden"); ';
                                     }       
});



Template.marketerSettings.events ({


'submit form': function(e) {
            e.preventDefault();
                    
        var listId = Company.findOne()._id;
         var theId = Company.findOne().userId;
         
         var trademark = "";
         if(CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogo"}) != undefined) {
         trademark = CompanyAssets.findOne({"companyId":Meteor.userId()} , {"type":"companyLogo"}).filename
         }
         var logo = "";
         if(CompanyAssets.findOne({"companyId":Meteor.userId()}, {"type":"companyLogoSmall"}) != undefined) {
         logo = CompanyAssets.findOne({"companyId":Meteor.userId()}, {"type":"companyLogoSmall"}).filename
         }
    
        var info = {
    
        //userId:theId,
        companyName:$(e.target).find('[name=companyName]').val(),
        companyLogo:trademark,
        companyLogoSmall:logo,
        companyAddress:$(e.target).find('[name=companyAddress]').val(),
        companyCity:$(e.target).find('[name=companyCity]').val(),
        companyState:$(e.target).find('[name=companyState]').val(),
        companyCountry:$(e.target).find('[name=companyCountry]').val(),
        companyPhone:$(e.target).find('[name=companyPhone]').val(),
        companySP:$(e.target).find('[name=companySP]').val(),
        companySPImg:"",
        about:$(e.target).find('[name=about]').val(),
        url:$(e.target).find('[name=url]').val(),
        email:$(e.target).find('[name=email]').val(),
        twitter:$(e.target).find('[name=twitter]').val(),
        facebook:$(e.target).find('[name=facebook]').val(),
        category:$(e.target).find('[name=category]').val(),
        keywords:$(e.target).find('[name=keywords]').val(),
        othersites:$(e.target).find('[name=othersites]').val(),
       // accountType:"marketer"
    };
    
    Company.update({"_id": listId},{$set: info});
          
   // Router.go("/dashboard/"+theId);
   
  // $("#dashboard_CompanyConfig").css("visibility", "hidden");
   $("#DashboardSidebar").css("visibility", "visible");
   $("#SettingsSidebar").css("visibility", "hidden");
   $("#dashboard_CompanyConfig").css("animation-name" , "slideOutAnim"); 
   
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
            
            console.log(info);
            
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
      
      
      
 
      

});


