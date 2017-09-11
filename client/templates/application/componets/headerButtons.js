Template.headerButtons.helpers({

buttons:function() {
        if(Company.find().count() == 0) {  
        
        return "";
        
        } else if (Meteor.users.find().count() == 0) {
            } else {
    return '<td><button  class="button__flat" >Latest News</button></td> \
    <td><button  class="button__flat" >Influencer</button></td>';
    
    }
    
    }


});
