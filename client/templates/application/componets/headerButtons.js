Template.headerButtons.helpers({

buttons:function() {
        if(Company.find().count() == 0) {  
        
        return "";
        
        } else if (Meteor.users.find().count() == 0) {
            } else {
               // return '<td><button id="companyPreview" class="button__flat" >Preview</button></td>';
               
               return "";
     
        }
    
    }


});

Template.headerButtons.events({


 'click #companyPreview': function(e) {
 
                        if($("#dashboard_Preview").css("visibility") == "hidden") {
                          $("#dashboard_Preview").css("visibility", "visible");
                        // $("#dashboard_Preview").css("animation-name" , "slideInAnim");
                         $('#DashboardSidebar').css("visibility", "hidden");
                         $('#SettingsSidebar').css("visibility", "hidden");
                        
                         
                         
                         } else {
                         
                          $("#dashboard_Preview").css("visibility", "hidden");
                        // $("#dashboard_Preview").css("animation-name" , "slideInAnim");
                         $('#DashboardSidebar').css("visibility", "visible");
                         $('#SettingsSidebar').css("visibility", "hidden");
                         
                         }
                         console.log($("#dashboard_Preview").css("visibility"));
                    }

});

