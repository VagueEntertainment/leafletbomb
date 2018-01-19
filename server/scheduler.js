//var schedule = later.parse.recur().on(5).minute(); // on fifth minute of every hour, every day
var schedule = later.parse.recur().every(1).minute(); // on fifth minute of every hour, every day
var hourlyEmailer = new ScheduledTask(schedule, checkScheduledPosts);


Meteor.startup(function () {
  hourlyEmailer.start();
});


function checkScheduledPosts() {

 
  var scheduled = Posts.find({status:1}).count();
  
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
                            
                               var theDate = themonth+'/'+theday+'/'+(d.getFullYear()); 
  
  
   
  
  for(var num = 0; num < Posts.find({status:1}).count(); num = num + 1) {
  
//  console.log(Posts.find({status:1}).fetch()[num].title+" to be released on "+ Posts.find({status:1}).fetch()[num].releasedate);
                            
     if(Posts.find({status:1}).fetch()[num].releasedate == theDate) {
    //    console.log("Releasing PR!!!");
        var docid = Posts.find({status:1}).fetch()[num]._id;
                                    
                                    var statusupdate = {
                                                            status:2
                                                            
                                                       };
        
        sendthemall(Posts.find({status:1}).fetch()[num].docId);
        
        Posts.update({"_id": docid},{$set:statusupdate});
        
     } else {
   //     console.log("Not releasing yet");
     }
                            
  
  }


}

/*
Normal email below

*/



function sendthemall(docId) {
       

 for(var PDnum = 0;PDnum < PostDistribution.findOne({docId:docId}).list.length;PDnum = PDnum+1) {
                         var listnum = 0;  
                         var listId = [];
                         var list = [];
                            if( PostDistribution.findOne({docId:docId}) != undefined) {
                                 listId = PostDistribution.findOne({docId:docId}).list[PDnum]; 
                                 
                                
                         }
                            //    console.log(DistributionLists.findOne());
                            if(DistributionLists.findOne({_id:listId}) != undefined) {
                                list= DistributionLists.findOne({_id:listId}).list;
                                
                                
                            }
                        
                        while(listnum < list.length) {
                            var name = Influencers.findOne({_id:list[listnum]}).Name;
                            
                        //    console.log(name);
                            var emailaddress = Influencers.findOne({_id:list[listnum]}).email;
                             var title = Posts.findOne({docId:docId}).title;
                             var tagline = Posts.findOne({docId:docId}).tagline;
                             var company = Company.findOne().companyName;
                            var text = Influencers.findOne({_id:list[listnum]}).notes+ "\n\n"+DistributionLists.findOne({_id:listId}).message +"\n\n"+ Posts.findOne({docId:docId}).release;
       
                             text = text.replace(/\n/g, "<br/>");
      
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
                                    `<h1>`+title+`</h1> <h3>`+tagline+`</h3> </br><br/>
                                        To be release on: `+Posts.findOne({docId:docId}).releasedate+` <br/><br/>
                                      `+fullRelease+` <br/><br/>
                                      For full release <a href=http://`+window.location.hostname+`:3000/release/`+docId+`?inf=`+list[listnum]+`>Click Here<a>`
                                     
                                    ); 
                        
                        }
                        
                        listnum = listnum + 1;
                        }
                    }
  }












/*
 Fancy email below

*/



function sendthemall1(docId) {
       

 for(var PDnum = 0;PDnum < PostDistribution.findOne({docId:docId}).list.length;PDnum = PDnum+1) {
                         var listnum = 0;  
                         var listId = [];
                         var list = [];
                            if( PostDistribution.findOne({docId:docId}) != undefined) {
                                 listId = PostDistribution.findOne({docId:docId}).list[PDnum]; 
                                 
                                
                         }
                            //    console.log(DistributionLists.findOne());
                            if(DistributionLists.findOne({_id:listId}) != undefined) {
                                list= DistributionLists.findOne({_id:listId}).list;
                                
                                
                            }
                        
                        while(listnum < list.length) {
                            var name = Influencers.findOne({_id:list[listnum]}).Name;
                            
                        //    console.log(name);
                            var emailaddress = Influencers.findOne({_id:list[listnum]}).email;
                             var title = Posts.findOne({docId:docId}).title;
                             var tagline = Posts.findOne({docId:docId}).tagline;
                             var company = Company.findOne().companyName;
                            var text = Influencers.findOne({_id:list[listnum]}).notes+ "\n\n"+DistributionLists.findOne({_id:listId}).message +"\n\n"+ Posts.findOne({docId:docId}).release;
       
                             text = text.replace(/\n/g, "<br/>");
      
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
                                                    
                                                    
                                            .postquote {
                                                      margin-top:10px;
                                                      margin-left:5%;
                                                      background:#fde6;
                                                      padding:10px;
                                                      border-radius:3px;
                                                      border-style: none none none solid;
                                                      border-color:red;
     
                                                     }
                                                     
                                       .postcite {
                                                    text-align:right;
                                                    width:100%;
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
                                                      <img src="`+trademark+`" width="200" height="50" alt="trademark" border="0" style="height: auto; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
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


