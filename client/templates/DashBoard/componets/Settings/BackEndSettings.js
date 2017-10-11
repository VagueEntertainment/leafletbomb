Template.BackEndSettings.helpers({


respondTo: function() {

                 
                
                return Settings.findOne({type:"email"}).respondTo;
            }












});




Template.BackEndSettings.events({



   'submit form': function(e) {
   
                        e.preventDefault();

                    info = {
                            companyId:Company.findOne()._id,
                            respondTo:$(e.target).find('[name=respond]').val(),
                            type:"email"
                    
                        };
                        
                        if(Settings.findOne({type:"email"}) == undefined) {
                        
                        Settings.insert(info);
                        
                        } else {
                            Settings.update({_id:Settings.findOne({type:"email"})._id},{$set:info});
                        }
                        
                        //Company.update({"_id": listId},{$set: info});


    },






});
