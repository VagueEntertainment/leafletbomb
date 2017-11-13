Template.dashBoard.rendered=function () {

 if(Meteor.userId() == null) {
        Router.go("/login");
    
    }
    
 if(Router.current().params.query.distlist != undefined) {
                                $("#dashboard_DistributionList").css('visibility', 'visible');
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                $("#dashboard_Published").css('visibility', 'hidden');
                                 $("#dashboard_Drafts").css('visibility', 'hidden');
                                 $("#dashboard_Scheduled").css('visibility', 'hidden');
 
 }    
    
}    


Template.dashBoard.helpers({               
                    
      influencerlist:function() {
                          var list = [];
                          var selected = DistributionLists.findOne({"listname":this.listname}).list;
                          var listindex = 0;
                          Influencers.find().forEach( function(stuff) {
                            list.push({"_id":stuff._id, "Name":stuff.Name , "companyName":stuff.companyName, "selected":"unchecked"});
                           });
                                   
                          return list;  
                    },
                    
                    
     aftersetupVisibility: function() {
                                var cleared = 0;
                            if(Settings.findOne({type:"email"}) == undefined) {
                                
                                    } else {
                                       cleared = cleared + 1;
                                    }
                    
                            if(CompanyAssets.findOne({type:"companyLogo" }) == undefined) {
                                
                                    } else {
                                         cleared = cleared + 1;
                                        }
                            
                            if(CompanyTeam.findOne({type:"master"}) == undefined) {
                               
                                    } else {
                                         cleared = cleared + 1;
                                    } 
                                    
                           if(cleared == 3) { return "hidden";}         
                                    
                                    
                                
                        },                    
                    
            
            });
            
            
            
            
Template.dashBoard.events({
                                                   

        'click #teamListItem' : function(e) {
                                $("#dashboard_DistributionList").css('visibility', 'hidden');
                                $("#dashboard_Teams").css('visibility', 'visible');
                                
                                $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                  
                            
                    },
                    
      'click #DistrobutionListItem' : function(e) {
                                 Router.go("/dashboard/"+Company.findOne().userId+"?list=PR");
                                $("#dashboard_DistributionList").css('visibility', 'visible');
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                
                                
                                $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                  
                    },  
                    
         'click #DashBoard' : function(e) {
         
                                $("#dashboard_DistributionList").css('visibility', 'hidden');
                                    $("#dashboard_Teams").css('visibility', 'hidden');
                                
                                 $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                  
                    },
                    
         'click #pr_PublishedItem' : function(e) {
         
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
         
         
                                $("#pr_dashboard_Published").css('visibility', 'visible');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                 
                            
                    },
         'click #pr_ScheduledItem' : function(e) {
         
                                 $("dashboard_Teams").css('visibility', 'hidden');
                                 $("#dashboard_DistributionList").css('visibility', 'hidden');
                                 
                                $("#pr_dashboard_Scheduled").css('visibility', 'visible');
                                 $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                 
                                 
                            
                    },           
                    
         'click #pr_DraftsItem' : function(e) {
                                
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                 $("#dashboard_DistributionList").css('visibility', 'hidden');                           
         
                                $("#pr_dashboard_Drafts").css('visibility', 'visible');
                                 $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                 
                            
                    },
                    
                    'click #nl_PublishedItem' : function(e) {
                                 $("#dashboard_Teams").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
                    
                                $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'visible');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                                
                            
                    },
         'click #nl_ScheduledItem' : function(e) {
                                
                                $("dashboard_Teams").css('visibility', 'hidden');
                                 $("#dashboard_DistributionList").css('visibility', 'hidden');
                                 
                                 $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'visible');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'hidden');
                            
                    },           
                    
         'click #nl_DraftsItem' : function(e) {
                                $("#dashboard_DistributionList").css('visibility', 'hidden');
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                
                                $("#pr_dashboard_Drafts").css('visibility', 'hidden');
                                 $("#pr_dashboard_Published").css('visibility', 'hidden');
                                 $("#pr_dashboard_Scheduled").css('visibility', 'hidden');
                                 
                                 $("#nl_dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#nl_dashboard_Published").css('visibility', 'hidden');
                                 $("#nl_dashboard_Drafts").css('visibility', 'visible');
                                  
                            
                    },
                    
                    
                    
          'click #SettingListItem' : function(e) {
                              $("#dashboard_CompanyConfig").css("visibility", "visible");
                              $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
                              $('#DashboardSidebar').css("visibility", "hidden");
                              $('#SettingsSidebar').css("visibility", "visible"); 
                             
          
                    },          
                    
                   
});   


Template.distrilist.events({


'click' : function(e) {

                                var thelist = [];
                                
                                thelist = DistributionLists.findOne({"listname":this.listname}).list;
                                var num = 0;
                                while(num < thelist.length) {
                                var Name = Influencers.findOne({"_id":thelist[num]}).Name; 
                                     
                                                        $("#distroaddwindow").find('[name="'+Name+'"]').prop("checked", true);
                                                           
                                                               
                                                  num = num + 1;                       
                                                  }                       
                                $("#distroaddwindow").css('visibility', 'visible');
                                $("#distroaddwindow").find('[name=listname]').val(this.listname);
                                $("#distroaddwindow").find('[name=message]').val(this.message); 
                                
                                
                                
                                
}




});

Template.influencer.events({


'click' : function(e) {
                            
                                var thelist = [];
                                
                              //  thelist = DistributionLists.findOne({"listname":this.listname}).list;
                                var num = 0;
                              //  while(num < thelist.length) {
                              //  var Name = Influencers.findOne({"_id":thelist[num]}).Name; 
                                     
                               //                         $("#distroaddwindow").find('[name="'+Name+'"]').prop("checked", true);
                                                           
                                                               
                                //                  num = num + 1;                       
                                  //                }                       
                                $("#influenceraddwindow").css('visibility', 'visible');
                                $("#influenceraddwindow").find('[name=name]').val(this.Name);
                                $("#influenceraddwindow").find('[name=company]').val(this.companyName);
                                $("#influenceraddwindow").find('[name=email]').val(this.email);
                                $("#influenceraddwindow").find('[name=url]').val(this.url);
                                $("#influenceraddwindow").find('[name=address]').val(this.address);
                                $("#influenceraddwindow").find('[name=country]').val(this.country);
                                $("#influenceraddwindow").find('[name=state]').val(this.state);
                                $("#influenceraddwindow").find('[name=phone]').val(this.phone);
                                $("#influenceraddwindow").find('[name=notes]').val(this.notes);
                                
                                
}




});          
