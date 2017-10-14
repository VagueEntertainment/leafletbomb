Template.BackEndSettings.helpers({


respondTo: function() {

                 
                
                return Settings.findOne({type:"email"}).respondTo;
            },


fromWho: function() {

                 
                
                return Settings.findOne({type:"email"}).fromWho;
            },


fullFrom: function() {

                return Settings.findOne({type:"email"}).fromWho+" <"+Settings.findOne({type:"email"}).respondTo+">";
            }







});




Template.BackEndSettings.events({



   'submit form': function(e) {
   
                        e.preventDefault();

                    info = {
                            companyId:Company.findOne()._id,
                            fromWho:$(e.target).find('[name=fromwho]').val(),
                            respondTo:$(e.target).find('[name=respondto]').val(),
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
