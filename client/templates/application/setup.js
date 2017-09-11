Template.setup.helpers ({

userid: function () {
        if(Meteor.users.find().count() == 1) {
             var userId = Meteor.users.findOne()._id;
               // Router.go("/profile/"+userId);
               return userId;
             } else {
                return "no user";
                }
                
                }

});
