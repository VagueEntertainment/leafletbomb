Template.dashBoard.helpers({
 
            userId:function() {    
                return Company.findOne().userId;
            },
            
        companyName:function() {
                       if(Company.find().count() === 0) {
                            Router.go("/marketerSetup/"+Meteor.userId());
                            console.log("setup needed");
                            }
                    return Company.findOne().companyName;
            }, 
        companyLogo:function() { 
                          var file = CompanyAssets.findOne({"companyId":Meteor.userId() , "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
   }, 
        companyLogoSmall: function() {var file = CompanyAssets.findOne({"companyId":Meteor.userId() , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
    
   }, 
        companyAddress:function() {
               
                return Company.findOne().companyAddress;
            }, 
        companyCity:function() {
                
                
                return Company.findOne().companyCity;
            }, 
        companyState:function() {
               
                
                return Company.findOne().companyState;
            }, 
        companyCountry:function() {
               
                
                return Company.findOne().companyCountry;
            }, 
        companyPhone:function() {
                
                
                return Company.findOne().companyPhone;
            }, 
        companySP:function() {
               
                
                return Company.findOne().companySP;
            }, 
        companySPImg:function() {
               
                
                return Company.findOne().companySPImg;
            }, 
         about: function() {
                
                
                return Company.findOne().about;
            },
        url:function() {
                
                return Company.findOne().url;
            }, 
        email:function() {
              
                return Company.findOne().email;
            }, 
        twitter:function() {
                
                return Company.findOne().twitter;
            }, 
        facebook:function() {
               
                return Company.findOne().facebook;
            },
        
                 
                                
        teamlist:function() {
                        var list = [general,tech,losers];
                        return list;
                    },
                    
      influencerlist:function() {
                          var list = [];
                          var selected = DistributionLists.findOne({"listname":this.listname}).list;
                          var listindex = 0;
                          Influencers.find().forEach( function(stuff) {
                            list.push({"_id":stuff._id, "Name":stuff.Name , "companyName":stuff.companyName, "selected":"unchecked"});
                           });
                                   
                          return list;  
                    }
                    
            
            });
            
            
            
            
Template.dashBoard.events({

        'click #companyedit' : function(e) {
                //    var id= Meteor.users.findOne()._id;
               // Router.go('/marketerSetup/'+id+'?edit="all"')
               
               $("#dashboard_CompanyConfig").css("visibility", "visible");
               $("#dashboard_CompanyConfig").css("animation-name" , "slideInAnim");
               $('#DashboardSidebar').css("visibility", "hidden");
               $('#SettingsSidebar').css("visibility", "visible");
               
        
        
        },
                                                   

        'click #teamListItem' : function(e) {
                                $("#dashboard_Teams").css('visibility', 'visible');
                                $("#dashboard_Published").css('visibility', 'hidden');
                                 $("#dashboard_Drafts").css('visibility', 'hidden');
                                 $("#dashboard_Scheduled").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
                            
                    },
                    
                    'click #DistrobutionListItem' : function(e) {
                                $("#dashboard_DistributionList").css('visibility', 'visible');
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                $("#dashboard_Published").css('visibility', 'hidden');
                                 $("#dashboard_Drafts").css('visibility', 'hidden');
                                 $("#dashboard_Scheduled").css('visibility', 'hidden');
                                  
                    },
                    
         'click #DashBoard' : function(e) {
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                 $("#dashboard_Published").css('visibility', 'hidden');
                                 $("#dashboard_Drafts").css('visibility', 'hidden');
                                 $("#dashboard_Scheduled").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
                            
                    },
                    
         'click #PublishedItem' : function(e) {
                                $("#dashboard_Published").css('visibility', 'visible');
                                 $("#dashboard_Drafts").css('visibility', 'hidden');
                                 $("#dashboard_Scheduled").css('visibility', 'hidden');
                                 $("#dashboard_Teams").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
                            
                    },
         'click #ScheduledItem' : function(e) {
                                $("#dashboard_Scheduled").css('visibility', 'visible');
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                 $("#dashboard_Published").css('visibility', 'hidden');
                                 $("#dashboard_Drafts").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
                            
                    },           
                    
         'click #DraftsItem' : function(e) {
                                $("#dashboard_Drafts").css('visibility', 'visible');
                                $("#dashboard_Teams").css('visibility', 'hidden');
                                 $("#dashboard_Published").css('visibility', 'hidden');
                                 $("#dashboard_Scheduled").css('visibility', 'hidden');
                                  $("#dashboard_DistributionList").css('visibility', 'hidden');
                            
                    }

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
