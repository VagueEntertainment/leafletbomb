Template.subaccountSignup.helpers ( {


    company: function() {
    
                    if(Company.findOne() != undefined) {
    
                         var company = Company.findOne({userId:Router.current().params.query.company}).companyName;
                        
                    
                        return "for "+company;
                    
                    } else {
                            return "";
                        }
                    },
                    
                 

    user: function() {
            if(Meteor.users.find().count() == 1) {
                var emailaddress = Meteor.users.findOne().emails[0].address;
                var getLocation = document.location.toString();
                getLocation = getLocation.split("//")[1].split("/")[1].length;
                if(getLocation == 0) {
                    Router.go('/profile/'+Meteor.users.findOne()._id);
                    
                    }
                return emailaddress;
                } else {
                    return "No users";
                }
    
    },
    
   

});
