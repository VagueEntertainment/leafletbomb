Template.setupNotices.helpers ({


 emailCheckVisibility: function() {
                            if(Settings.findOne({type:"email"}) == undefined) {
 
                                return "visible";
                            
                            } else {
                                return "hidden";
                            }
                        },
 ltCheckVisibility: function() {
                            if(CompanyAssets.findOne({type:"companyLogo" }) == undefined) {
 
                                return "visible";
                            } else {
                                return "hidden";
                            }
                            
                        },
 maCheckVisibility: function() {
                            if(CompanyTeam.findOne({type:"master"}) == undefined) {
 
                                return "visible";
                            } else {
                                return "hidden";
                            } 
                                
                        },                                               













});
