

Template.postCtrl.rendered=function () {


if(Meteor.userId() == null) {
        Router.go("/login");
    
    }

}


Template.postCtrl.helpers ({

   posts: function() {
               var docId= Router.current().url.split("/")[Router.current().url.split("/").length -1].split("?")[0];
               //return Posts.find({ status:2 }, {sort:{releasedate: -1}});
                return Posts.find({docId:docId});
                            
                    },
                    
  doc: function(e) {
            var id = Router.current().params.docId;
                    
                    return id;
    
                },
  emailEngagment: function(e) {
                    var id = Router.current().params.docId;
                    
                        if(PostEngage.find() == undefined) {
                            return PostDistribution.findOne({docId:id}).list;
                            
                    } else { 
                        return PostEngage.find();
                   }
                   
                    
                    },
                    

                    
                    
                                 
  
});


Template.postSendItem.helpers ({

    openIcon: function() {
                if(this.opened == 0) {
                    return "fa-envelope-o";
                } else {
                    return "fa-envelope-open-o";
                }
                },
    seenIcon:function() {
                if(this.seen== 0) {
                    return "fa-eye-slash";
                } else {
                    return "fa-eye";
                }
                },
    responseIcon:function() {
                if(this.questions == "") {
                    return "fa-comment-o";
                } else {
                   return "fa-commenting";
                }
                },                       
                                

});


Template.postQA.helpers ({

questions: function() {
                    var id = window.location.pathname.split("/")[4].split("?")[0];
                return PostQuestions.find({docId:id});
            }


});


Template.postCtrlMenu.helpers ({



     currentstatus: function(e) {
                           var id = Router.current().params.docId;
                           
                           
                           switch(Posts.findOne({docId:id}).status) {
                                    case 0:return "Draft";break;
                                    case 1:return "Schedule";break;
                                    case 2:return "Published";break;
                                    case 4: return "Archived";break;
                                    default:return "Draft";break;
                           
                          }
                    
                    
                    },              
                    
    releasedate: function() {
                    var id = Router.current().params.docId;
                return Posts.findOne({docId:id}).releasedate;
                },
                
    archivedate: function() {
                    var id = Router.current().params.docId;
                return Posts.findOne({docId:id}).archivedate;
                },
                
                
    companyName: function() {
    
                    return Company.findOne().companyName;
                    },                             

});



Template.postCtrl.events ({


    'click #backbutton': function(e) {
    
                            Router.go('/dashboard/'+Company.findOne().userId);
                        },
                        
                        
                 
                        
                        
    'click #ScheduleOptsCancel' : function() {
    
                            $('#scheduleopts').css('visibility', 'hidden');
                        }, 
                        
     'click #PublishOptsCancel' : function() {
    
                            $('#publishopts').css('visibility', 'hidden');
                        } ,
                        
      'click  #PublishOptsPublish' : function(e) {
                                    var doc = Router.current().params.docId;
      
                                    var docid = Posts.findOne({docId:doc})._id;
                                    
                                  //  console.log(docid);
                                    var statusupdate = {
                                                            status:2
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate });
                                    
                                    $('#publishopts').css('visibility', 'hidden');
                                    
                                     sendthemall(doc);        
                                 
      
                        },
                        
                        
      'click #ScheduleOptsPublish' : function(e) {
                                    var doc = Router.current().params.docId;
                                    
                                    var docid = Posts.findOne({docId:doc})._id;
                                    
                                    var statusupdate = {
                                                            status:1
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate});
                                    
                                    $('#scheduleopts').css('visibility', 'hidden');
      
                        },                                                                                 



});

Template.postCtrlMenu.events ({

    'click #scheduleIt' : function() {
                            
                            $('#scheduleopts').css('visibility', 'visible');
                        }, 
                        
     'click #publishIt' : function() {
                            
                            $('#publishopts').css('visibility', 'visible');
                        },
                        
     'click #editRelease': function() {
                           var doc = Router.current().params.docId;
    
                            Router.go('/dashboard/'+Company.findOne().userId+'/newPressRelease/?edit='+doc);
                        },  
                        
     'click #removeRelease' : function() {
                                var doc = Router.current().params.docId;
                                    
                                    var docid = Posts.findOne({docId:doc})._id;
                                    
                                    var statusupdate = {
                                                            status:4
                                                            
                                                       };
                                    
                                    Posts.update({"_id": docid},{$set:statusupdate});
                                        Router.go('/dashboard/'+Company.findOne().userId);
                        },                                               




});

 function sendthemall(docId) {
       

 for(var PDnum = 0;PDnum < PostDistribution.findOne({docId:docId}).list.length;PDnum = PDnum+1) {
                         var listnum = 0;  
                         var listId = [];
                         var list = [];
                            if( PostDistribution.findOne({docId:docId}) != undefined) {
                                 listId = PostDistribution.findOne({docId:docId}).list[PDnum]; 
                                 
                                
                         }
                                console.log(DistributionLists.findOne());
                            if(DistributionLists.findOne({_id:listId}) != undefined) {
                                list= DistributionLists.findOne({_id:listId}).list;
                                
                                
                            }
                        
                        while(listnum < list.length) {
                            var name = Influencers.findOne({_id:list[listnum]}).Name;
                            
                            console.log(name);
                            var emailaddress = Influencers.findOne({_id:list[listnum]}).email;
                             var title = Posts.findOne({docId:docId}).title;
                             var tagline = Posts.findOne({docId:docId}).tagline;
                             var company = Company.findOne().companyName;
                             
                             
                             // gets trademark 
                             var trademark = "";
                             
                                if(CompanyAssets.findOne({"companyId":Company.findOne()._id , "type":"companyLogo"}) != undefined) {
                                                 var file = CompanyAssets.findOne({"companyId":Company.findOne()._id , "type":"companyLogo"}).filename;
                                trademark = `http://`+window.location.hostname+`:`+window.location.port+Images.findOne({_id:file}).url();
                                } else {
                                        trademark = `http://`+window.location.hostname+`:`+window.location.port+`/media/newLogo_green.png`;
                                    }  
                                    
                             // gt
                             
                             // gets featured image     
                                    
                             var featuredImage = "";
  
                                PostAssets.find({docId:docId , type:"featured"}).forEach(
                                            function(files){

                                                featuredImage =`http://`+window.location.hostname+`:`+window.location.port+Images.findOne({_id:files.filename}).url();
                                            
                                            
                                            });
                  
                                // gfi
                                
                                
                                // gets post assets 
                                 var thefiles = [];
                   PostAssets.find({docId:docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                      
                                 // gpa    
                                    
                             
                            var text = Influencers.findOne({_id:list[listnum]}).notes+ "\n\n"+DistributionLists.findOne({_id:listId}).message +"\n\n"+ Posts.findOne({docId:docId}).release;
       
                             text = text.replace(/\n/g, "<br/>");
                             
                             
                              text = text.replace(/{{asset1}}/g, "<img  src='http://"+window.location.hostname+":"+window.location.port+thefiles[0]+"' class='postimg' />");
          
                                 text = text.replace(/{{asset2}}/g, "<img  src='http://"+window.location.hostname+":"+window.location.port+thefiles[1]+"' class='postimg' />");
           
                                    text = text.replace(/{{asset3}}/g, "<img  src='http://"+window.location.hostname+":"+window.location.port+thefiles[2]+"' class='postimg' />");
          
                                        text = text.replace(/{{asset4}}/g, "<img  src='http://"+window.location.hostname+":"+window.location.port+thefiles[3]+"' class='postimg' />");
           
                                            text = text.replace(/{{asset5}}/g, "<img  src='http://"+window.location.hostname+":"+window.location.port+thefiles[4]+"' class='postimg' />");
      
                            // Replace quotations as a quote block //
       
          
          
                            var quoteCutter = text.split('"');
                             var quotenum = 1;
                            text = quoteCutter[0];
                         while(quotenum < quoteCutter.length) {
                                   if(quotenum % 2 != 0) {
                                        text = text+"<div class='postquote'><p>"+quoteCutter[quotenum]+'</b></div><br/>';
                                    } else {
                                          text = text+quoteCutter[quotenum];
                                }
          
          
                        quotenum = quotenum + 1;
                        }
      
      
                        //End Quote check//
                                //Splits and rejoins text based on the citation of the quotes//
                         text = text.split("---");
                        var num = 1;
                        var fullRelease = text[0];
                         while(num < text.length) {
                                   if(num % 2 != 0) {
                                          fullRelease = fullRelease+'<div class="postcite"><b>'+text[num]+'</b></div><br/>';
                                      } else {
                                          fullRelease = fullRelease+text[num];
                                         }
                
                            num = num + 1;
                             }
                         //End citation check //
                            
                            
                            
                            
                            var engage = {
                                            docId:docId,
                                            influencerName:name,
                                            influencerEmail:emailaddress,
                                            opened:0,
                                            seen:0,
                                            questions:""
                                            
                                        };
                                        var reply = Settings.findOne({type:"email"}).fromWho+" <"+Settings.findOne({type:"email"}).respondTo+">";
                                        //console.log(reply);
                    if(PostEngage.findOne({docId:docId} && {influencerEmail:emailaddress}) == undefined) {                    
                           PostEngage.insert(engage);                 
                                 
                            Meteor.call(
                                    'sendEmail',
                                     name +"<"+emailaddress+">",
                                    reply,
                                    title+' - '+company,
                                    `<head>
                                      <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                                      <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                                      <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                                      <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                                      <title>`+title+`</title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                                  
                                      <!-- Web Font / @font-face : BEGIN -->
                                      <!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->
                                  
                                      <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
                                      <!--[if mso]>
                                          <style>
                                              * {
                                                  font-family: sans-serif !important;
                                              }
                                          </style>
                                      <![endif]-->
                                  
                                      <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
                                      <!--[if !mso]><!-->
                                      <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->
                                      <!--<![endif]-->
                                  
                                      <!-- Web Font / @font-face : END -->
                                  
                                      <!-- CSS Reset : BEGIN -->
                                      <style>
                                  
                                          // What it does: Remove spaces around the email design added by some email clients. 
                                          // Beware: It can remove the padding / margin and add a background color to the compose a reply window. 
                                          html,
                                          body {
                                              margin: 0 auto !important;
                                              padding: 0 !important;
                                              height: 100% !important;
                                              width: 100% !important;
                                          }
                                  
                                          // What it does: Stops email clients resizing small text. 
                                          * {
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                          }
                                  
                                          // What it does: Centers email on Android 4.4 
                                          div[style*="margin: 16px 0"] {
                                              margin: 0 !important;
                                          }
                                  
                                          // What it does: Stops Outlook from adding extra spacing to tables. 
                                          table,
                                          td {
                                              mso-table-lspace: 0pt !important;
                                              mso-table-rspace: 0pt !important;
                                          }
                                  
                                          // What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. 
                                          table {
                                              border-spacing: 0 !important;
                                              border-collapse: collapse !important;
                                              table-layout: fixed !important;
                                              margin: 0 auto !important;
                                          }
                                          table table table {
                                              table-layout: auto;
                                          }
                                  
                                          // What it does: Uses a better rendering method when resizing images in IE. 
                                          img {
                                              -ms-interpolation-mode:bicubic;
                                          }
                                  
                                          // What it does: A work-around for email clients meddling in triggered links. 
                                          *[x-apple-data-detectors],  // iOS 
                                          .x-gmail-data-detectors,    // Gmail 
                                          .x-gmail-data-detectors *,
                                          .aBn {
                                              border-bottom: 0 !important;
                                              cursor: default !important;
                                              color: inherit !important;
                                              text-decoration: none !important;
                                              font-size: inherit !important;
                                              font-family: inherit !important;
                                              font-weight: inherit !important;
                                              line-height: inherit !important;
                                          }
                                  
                                          // What it does: Prevents Gmail from displaying an download button on large, non-linked images. 
                                          .a6S {
                                             display: none !important;
                                             opacity: 0.01 !important;
                                         }
                                         // If the above doesn't work, add a .g-img class to any image in question. 
                                         img.g-img + div {
                                             display: none !important;
                                         }
                                  
                                         // What it does: Prevents underlining the button text in Windows 10 
                                          .button-link {
                                              text-decoration: none !important;
                                          }
                                          
                                           .postimg {
                                                     width: 40%;
                                                     height: auto;
                                                     margin:auto;
                                                     display: block;
   
                                                    }
                                  
                                          // What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  
                                          // Create one of these media queries for each additional viewport size you'd like to fix 
                                          // Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting 
                                          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { // iPhone 6 and 6+ 
                                              .email-container {
                                                  min-width: 375px !important;
                                              }
                                          }
                                  
                                      </style>
                                      <!-- CSS Reset : END -->
                                  
                                      <!-- Progressive Enhancements : BEGIN -->
                                      <style>
                                  
                                          // What it does: Hover styles for buttons 
                                          .button-td,
                                          .button-a {
                                              transition: all 100ms ease-in;
                                          }
                                          .button-td:hover,
                                          .button-a:hover {
                                              background: #555555 !important;
                                              border-color: #555555 !important;
                                          }
                                  
                                          // Media Queries 
                                          @media screen and (max-width: 600px) {
                                  
                                              .email-container {
                                                  width: 100% !important;
                                                  margin: auto !important;
                                              }
                                  
                                              // What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. 
                                              .fluid {
                                                  max-width: 100% !important;
                                                  height: auto !important;
                                                  margin-left: auto !important;
                                                  margin-right: auto !important;
                                              }
                                  
                                              // What it does: Forces table cells into full-width rows. 
                                              .stack-column,
                                              .stack-column-center {
                                                  display: block !important;
                                                  width: 100% !important;
                                                  max-width: 100% !important;
                                                  direction: ltr !important;
                                              }
                                              // And center justify these ones. 
                                              .stack-column-center {
                                                  text-align: center !important;
                                              }
                                  
                                              // What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. 
                                              .center-on-narrow {
                                                  text-align: center !important;
                                                  display: block !important;
                                                  margin-left: auto !important;
                                                  margin-right: auto !important;
                                                  float: none !important;
                                              }
                                              table.center-on-narrow {
                                                  display: inline-block !important;
                                              }
                                  
                                              // What it does: Adjust typography on small screens to improve readability
                                              .email-container p {
                                                  font-size: 17px !important;
                                                  line-height: 22px !important;
                                              }
                                          }
                                          
                                          .postimg {
                                                     width: 40%;
                                                     height: auto;
                                                     margin:auto;
                                                     display: block;
   
                                                    }
                                                    
                                          .postquote {
                                                      margin-top:10px;
                                                      margin-left:5%;
                                                      background:#fde6;
                                                      padding:10px;
                                                      border-radius:3px;
                                                      -webkit-box-shadow: 2px 4px 8px rgba(0,0,0, 0.15);
                                                      -moz-box-shadow: 2px 4px 8px rgba(0,0,0, 0.15);
                                                      box-shadow: 2px 4px 8px rgba(0,0,0,0.15);
                                                      border-style: none none none solid;
                                                      border-color:red;
     
                                                     }
                                                     
                                       .postcite {
                                                    text-align:right;
                                                    width:100%;
                                                }          
                                                    
                                  
                                      </style>
                                      <!-- Progressive Enhancements : END -->
                                  
                                      <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
                                      <!--[if gte mso 9]>
                                      <xml>
                                          <o:OfficeDocumentSettings>
                                              <o:AllowPNG/>
                                              <o:PixelsPerInch>96</o:PixelsPerInch>
                                          </o:OfficeDocumentSettings>
                                      </xml>
                                      <![endif]-->
                                  
                                  </head>
                                  <body width="100%" bgcolor="#222222" style="margin: 0; mso-line-height-rule: exactly;">
                                      <center style="width: 100%; background: #D6D6D6; text-align: left;">
                                  
                                          <!-- Visually Hidden Preheader Text : BEGIN -->
                                          <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                                              `+tagline+`
                                          </div>
                                          <!-- Visually Hidden Preheader Text : END -->
                                  
                                          <!-- Email Header : BEGIN -->
                                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="800" style="margin: auto;" class="email-container">
                                              <tr>
                                                  <td style="padding: 20px 0; text-align: center">
                                                      <img src="`+trademark+`" width="200" height="50" alt="trademark" border="0" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                                  </td>
                                              </tr>
                                          </table>
                                          <!-- Email Header : END -->
                                  
                                          <!-- Email Body : BEGIN -->
                                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="800" style="margin: auto;" class="email-container">
                                  
                                              <!-- Hero Image, Flush : BEGIN -->
                                              <tr>
                                                  <td bgcolor="#ffffff" align="center">
                                                      <img src="`+featuredImage+`" width="800" height="" alt="Featured Image" border="0" align="center" style="width: 100%; max-width: 800px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto;" class="g-img">
                                                  </td>
                                              </tr>
                                              <!-- Hero Image, Flush : END -->
                                  
                                              <!-- 1 Column Text + Button : BEGIN -->
                                              <tr>
                                                  <td bgcolor="#ffffff" style="padding: 40px 40px 20px; text-align: center;">
                                                      <h1 style="margin: 0; font-family: sans-serif; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;">`+title+`</h1>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td bgcolor="#ffffff" style=" border-radius:5px;padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;">
                                                      <p style="margin: 0;text-align:left;">`+fullRelease+`</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td bgcolor="#ffffff" style="padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto">
                                                          <tr>
                                                              <td style="border-radius: 3px; background: #2DD1AC; text-align: center;" class="button-td">
                                                                  <a href="http://`+window.location.hostname+`:`+window.location.port+`/release/`+docId+`?inf=`+list[listnum]+`" style="background: #2DD1AC; border: 15px solid #2DD1AC; font-family: sans-serif; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;" class="button-a">
                                                                      &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffffff;">Get Full Press Kit</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                  </a>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <!-- Button : END -->
                                                  </td>
                                              </tr>
                                              <!-- 1 Column Text + Button : END -->
                                  
                                      </table>
                                      <!-- Email Body : END -->
                                  
                                      <!-- Email Footer : BEGIN -->
                                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="800" style="margin: auto; font-family: sans-serif; color: #888888; line-height:18px;" class="email-container">
                                          <tr>
                                              <td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: sans-serif; line-height:18px; text-align: center; color: #888888;" class="x-gmail-data-detectors">
                                                  <!--<webversion style="color:#cccccc; text-decoration:underline; font-weight: bold;">Get Press Kit</webversion> -->
                                                  <br><br>
                                                  `+Company.findOne().companyName+`<br>`+Company.findOne().companyAddress+`<br>`+Company.findOne().companyPhone+`
                                                  <br><br>
                                                  <unsubscribe style="color:#888888; text-decoration:underline;">unsubscribe</unsubscribe>
                                              </td>
                                          </tr>
                                      </table>
                                      <!-- Email Footer : END -->
                                  
                                      <!-- Full Bleed Background Section : BEGIN -->
                                      <table role="presentation" bgcolor="#2DD1AC" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                          <tr>
                                              <td valign="top" align="center">
                                                  <div style="max-width: 800px; margin: auto;" class="email-container">
                                                      <!--[if mso]>
                                                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="800" align="center">
                                                      <tr>
                                                      <td>
                                                      <![endif]-->
                                                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                          <tr>
                                                              <td style="padding: 40px; text-align: right; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #ffffff;">
                                                                  <p style="margin: 0;color:black">Dropped by <a href="https://leafletbomb.io"> Leaflet Bomb</a></p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <!--[if mso]>
                                                      </td>
                                                      </tr>
                                                      </table>
                                                      <![endif]-->
                                                  </div>
                                              </td>
                                          </tr>
                                      </table>
                                      <!-- Full Bleed Background Section : END -->
                                  
                                      </center>
                                  </body>`   
                                    ); 
                        
                        }
                        
                        listnum = listnum + 1;
                        }
                    }
  } 
  
  // <img src=“http://`+window.location.hostname+`:3000/mail/`+docId+`?inf=`+list[listnum]`” width=“0” height=“0”>
  
  
  
  //For full release <a href=http://`+window.location.hostname+`:`window.location.port`/release/`+docId+`?inf=`+list[listnum]+`>Click Here<a>`+
  
function document(release) {

var text = release;
       
       
       
       var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
        
          
         // text = text.replace(/\*/g, "<li>");
          
          //Finds bullets  (BROKEN AT THE MOMENT///
       /*    var bullets = text.split('*');
           var bulletlist = "";
          var bulletnum = 1;
          bulletlist = bullets[0];
          while(bulletnum < bullets.length) {
         
                    var breakout = bullets[bulletnum].split("\n")[0];
                bulletlist = bulletlist+"<li>"+breakout+"</li>";                        
                    
            bulletnum = bulletnum + 1;
          }
          
          text = bulletlist + bullets[bulletnum -1].slice(10);
          
          */
          
          text = text.replace(/\n/g, "<br/>");
      
          text = text.replace(/{{asset1}}/g, "<img  src='"+thefiles[0]+"' class='postimg' />");
          
           text = text.replace(/{{asset2}}/g, "<img  src='"+thefiles[1]+"' class='postimg' />");
           
           text = text.replace(/{{asset3}}/g, "<img  src='"+thefiles[2]+"' class='postimg' />");
          
           text = text.replace(/{{asset4}}/g, "<img  src='"+thefiles[3]+"' class='postimg' />");
           
            text = text.replace(/{{asset5}}/g, "<img  src='"+thefiles[4]+"' class='postimg' />");
          
          
          var quoteCutter = text.split('"');
          var quotenum = 1;
          text = quoteCutter[0];
          while(quotenum < quoteCutter.length) {
                        if(quotenum % 2 != 0) {
                text = text+"<br/><div style='width:10px;height:100%;color:#fff;float:left'> </div> <div class='postquote'><p>"+quoteCutter[quotenum]+'</b></div><br/>';
                } else {
                    text = text+quoteCutter[quotenum];
                    }
          
          
            quotenum = quotenum + 1;
          }
      
      
        //End Quote check//
        //Splits and rejoins text based on the citation of the quotes//
        text = text.split("---");
        var num = 1;
        var fullRelease = text[0];
        while(num < text.length) {
                if(num % 2 != 0) {
                fullRelease = fullRelease+'<div class="postcite"><b>'+text[num]+'</b></div><br/>';
                } else {
                    fullRelease = fullRelease+text[num];
                    }
                
            num = num + 1;
        }
        //End citation check //
        
        
        
        
        return fullRelease;
}


function htmlStyling() {



/*return `<style>

.post-content, .post-packets, {

 -webkit-box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);



}

.post , .container {

font-family: "Montserrat", Helvetica, Arial, sans-serif;
font-size: 14px;
font-weight: 400;

}

 .thumbnail {
        width: 80%;
        height: auto;
        margin:auto;
   }
   
     .postimg {
        width: 40%;
        height: auto;
        margin:auto;
        display: block;
   
   }
   
    .postquote {
        margin-top:10px;
        margin-left:5%;
        background:#fde6;
        padding:10px;
        border-radius:3px;
        -webkit-box-shadow: 2px 4px 8px rgba(0,0,0, 0.15);
        -moz-box-shadow: 2px 4px 8px rgba(0,0,0, 0.15);
        box-shadow: 2px 4px 8px rgba(0,0,0,0.15);
        border-style: none none none solid;
        border-color:red;
     
     }
      .postcite {
        text-align:right;
        width:100%;
        
      
      }


</style>`; */

return `<link rel="stylesheet" type="text/css" class="__meteor-css__" href="http://`+window.location.hostname+`:3000/merged-stylesheets.css?hash=7feaa8a9b90961e70d4b2214abd5f31ca7144498">
`;



}
