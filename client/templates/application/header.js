Template.header.helpers ( {

    user: function() {
            if(Meteor.users.findOne() != undefined) {
                      /*  switch (Meteor.users.findOne().profile.accounttype) {
                        
                         case "marketer": if(Company.findOne() != undefined) {
                                    Router.go('/dashboard/'+Meteor.users.findOne()._id);
                            } else {
                                Router.go('/marketerSetup/'+Meteor.users.findOne()._id);
                            }; break;
                         case "teamMember" : if(Company.findOne() != undefined) {
                                    Router.go('/dashboard/'+Company.findOne().userId);
                                    };
                           break;
                            
                         default: Router.go('/influence/'+Meteor.users.findOne()._id); break;
                         
                         } */
                                 
                                return "Dashboard";
                           // return Meteor.users.findOne().emails[0].address; 
                         
                
                } else {
                    //   Router.go('/welcome');
                    return "Login";
                }
    
    },
    
    avatar: function () {
    
             if(Meteor.users.findOne() != undefined) {
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
    
    trademark: function() {
                        Meteor.subscribe('images');
                        Meteor.subscribe('companyassets');
                                if(CompanyAssets.findOne({"companyId":Company.findOne()._id , "type":"companyLogo"}) != undefined) {
                                var file = CompanyAssets.findOne({"companyId":Company.findOne()._id , "type":"companyLogo"}).filename;
                                return Images.findOne({_id:file}).url();
                          } else {
                            return "/media/newLogo_green.png";
                            }
        
        },
        
    logo: function() {
                        Meteor.subscribe('images');
                        Meteor.subscribe('companyassets');
                            var file = CompanyAssets.findOne({"companyId":Company.findOne()._id , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
        
        },    
    
    url: function() {
            if(Meteor.users.findOne() != undefined) {
            
                        switch(Meteor.users.findOne().profile.accounttype) {
                        
                            case "marketer" : return "/dashBoard/"+Meteor.users.findOne()._id;break;
                            case "teamMember" : return "/dashBoard/"+Company.findOne().userId;break;
                            default : return '/influence/'+Meteor.users.findOne()._id; break;
                            
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
    
    },
    
    
    whereWeAt: function() {
                var location = Router.current().url.split("/")[1].split("?")[0];
                if(location.replace(/%20/g," ") == Company.findOne().companyName) { 
                return "- Newsroom -";           
                } else {   
    return '';
    }
    
    },
    
    



});

Template.header.events ({


    'click #newsroom' : function() {
                        
                        Router.go("/"+Company.findOne().companyName);
                        },



});

