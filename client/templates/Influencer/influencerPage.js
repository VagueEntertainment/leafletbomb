Template.influencerPage.helpers({

posts:function() {
                    if(Router.current().params.query.pr == undefined) {
                  
                        return Posts.find({status:2}, {sort:{releasedate:1}, limit: 1});
        
                    } else {
                            return Posts.find({docId:Router.current().params.query.pr , status:2}, {sort:{releasedate:1}, limit: 1});
                    }
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
            }


});

Template.pressReleaseList.helpers({

postlist:function() {    
        return Posts.find({status:2}, {sort:{releasedate:1}});
        },
        
});  

Template.pressReleaseList.events({

'click ': function() {
                       Router.go("/"+Company.findOne().companyName+"?pr="+this.docId);

                    },
                    
                 
}); 


Template.influencerQA.helpers ({


questions: function() {
                    var id = window.location.pathname.split("/")[2].split("?")[0];
                return PostQuestions.find({docId:id});
            }



});   


Template.QuestionItem.helpers({

    influencer: function () {
                                       
                                return Influencers.findOne({_id:this.influencer}).Name;
        
                                },
   avatar: function() {
                        var md5Hash = Gravatar.hash(Influencers.findOne({_id:this.influencer}).email);
                        return `<img height=20 width=auto class="img-circle" src='https://www.gravatar.com/avatar/`+md5Hash+`' > </img>`;

   
                        },                             


});

Template.influencerPage.events ({

'click #companySidebar' : function () {
                        if($("#companySidebar").css("left") != "0px") {
                        $("#companySidebar").css("animation-name" , "sideBarSlideIn");
                        } else {
                        
                        $("#companySidebar").css("animation-name" , "sideBarSlideOut");
                        }
                        
                    },  
                    
'click #faqSidebar' : function () {
                        
                        
                        if($("#faqSidebar").css("right") != "0px") {
                        $("#faqSidebar").css("animation-name" , "interactBarSlideIn");
                        $("#questionSidebar").css("visibility", "hidden");
                        } else {
                        $("#questionSidebar").css("visibility", "visible");
                        $("#faqSidebar").css("animation-name" , "interactBarSlideOut");
                        }
                        
                    },
'click #questionSidebar' : function () {
                       
                        if($("#questionSidebar").css("right") != "0px") {
                        $("#questionSidebar").css("animation-name" , "interactBarSlideIn");
                        } else {
                        
                        $("#questionSidebar").css("animation-name" , "interactBarSlideOut");
                        }
                        
                    },
/* 'scroll #mainPage' : function() {
                            
                        $('#header').css('opacity', 0.2);
                        
                        
                        }, 
                        
  'mousemove #mainPage' : function() {
                            
                        $('#header').css('opacity', 1);
                        
                        
                        },  */
                        
   'click #addQuestion' : function() {
                           
                        $('#question').css('visibility',"visible");     
                        },
                        
    'click #askQuestion' : function () {
                                
                                addquestion($('#theQuestion').val());
                            $('#question').css('visibility',"hidden");
                        },  
      'click #cancelQuestion' : function () {
                               
                            $('#question').css('visibility',"hidden");
                        }                                     
                        
                        
 });  
 
 function addquestion(question) {
            var id = window.location.pathname.split("/")[2].split("?")[0];
            var influencer = Router.current().params.query.inf;
            var d = new Date();
             var theday = "";
             var themonth = "";
                        if(d.getDate() < 10) {
                            theday = "0"+d.getDate();
                            } else {
                            theday = d.getDate();
                            }
                            
                            if((d.getMonth() + 1) < 10) {
                            themonth = "0"+(d.getMonth() + 1);
                            } else {
                            themonth = (d.getMonth() + 1);
                            }
                            var currentdate = themonth+'/'+theday+'/'+d.getFullYear();
                            
            var info = {
                        docId:id,
                        influencer:influencer,
                        question:question,
                        date:currentdate,
                        faq:0,
                        };
                        
                        if (question.length < 12) {
                            PostQuestions.insert(info);
                        }
    
 
 
 }     

        
