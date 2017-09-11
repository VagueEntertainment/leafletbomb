Template.header.helpers ( {

    user: function() {
            if(Meteor.users.find().count() == 1) {
                   if(Meteor.users.findOne().profile.accounttype == "marketer") {  
                            Router.go('/dashboard/'+Meteor.users.findOne()._id);
                            } else {
                            Router.go('/influence/'+Meteor.users.findOne()._id);
                            }   
                    //if(Company.find().count() === 0) {  
                            return Meteor.users.findOne().emails[0].address; 
                          //  } else 
                          //  return Company.findOne().companyName;
                
                } else {
                    //   Router.go('/welcome');
                    return "Login / Create Account";
                }
    
    },
    
    avatar: function () {
    
             if(Meteor.users.find().count() == 1) {
                            Meteor.subscribe('images');
                            Meteor.subscribe('companyassets');
             
                            var file = CompanyAssets.findOne({"companyId":Meteor.users.findOne()._id, "type":"companySPImg"}).filename;
                        
                                
                          return Images.findOne({_id:file}).url();
                          
                
                } else {
                    
                    return " ";
                }
    
    },
    
    title: function () {
    
                if(Company.find().count() === 0) {  
                
                            return "LeafLeft Bomb"; 
                            
                            
                            } else {
                            return Company.findOne().companyName;
                            
                            }
    },
    
    logo: function() {
                        Meteor.subscribe('images');
                        Meteor.subscribe('companyassets');
                            var file = CompanyAssets.findOne({"companyId":Meteor.users.findOne()._id , "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
        
        },
    
    url: function() {
            if(Meteor.users.find().count() == 1) {
                       if(Meteor.users.findOne().profile.accounttype == "marketer") {
                                 return "/dashBoard/"+Meteor.users.findOne()._id;
                          } else {
                                return '/influence/'+Meteor.users.findOne()._id;
                          }       
                
                
                } else {
                        //Router.go('/');
                    return "/login";
                }
    
    },
    
    notifications:function() {
            if(Meteor.users.find().count() == 1) {
                        
                return "Notification";
                } else {
                    return "";
                }
    
    },
    
    searchit:function() {
            if(Meteor.users.find().count() == 1) {
                        
                return "Search";
                } else {
                    return "";
                }
    
    },
    
    optional:function() {
            if(Meteor.users.find().count() == 1) {
                       
                return "/";
                } else {
                        
                    return "/welcome";
                }
    
    }
    



});
