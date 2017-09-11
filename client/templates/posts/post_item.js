Template.postItem.helpers ( {
  
    domain: function() {
       var a = document.createElement('a');
       a.href = this.url;
       return a.hostname;
       },
       releasechanged: function() {
       var text = this.release;
       
          
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
      
        // Replace quotations as a quote block //
       // text = text.replace(/"/g, "</p></div><p>");
      //  text = text.replace(/“​/g, "</p><div class='postquote'><p>");
          
          
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
       },
       
       /* This needs to be done in one or two lines. But I'm using a hammer today. Tommorow
            I'll use a scalpel */
     companyName: function() {
       Meteor.subscribe('companies',this.userId);
       Meteor.subscribe('postassets');
                Meteor.subscribe('images');
        return Company.findOne({userId:this.userId}).companyName;
        },
       companyAddress: function() {
        
        return Company.findOne({userId:this.userId}).companyAddress;
        },
         companyLogo:function() { 
                          var file = CompanyAssets.findOne({"companyId":this.userId , "type":"companyLogo"}).filename;
                          return Images.findOne({_id:file}).url();
   }, 
        companyLogoSmall: function() {var file = CompanyAssets.findOne({"companyId":this.userId , "type":"companyLogoSmall"}).filename;
                          return Images.findOne({_id:file}).url();
    
   }, 
        
        companyCity:function() {
        
        return Company.findOne({userId:this.userId}).companyCity;
        },
        companyState:function() {
        
        return Company.findOne({userId:this.userId}).companyState;
        },
        companyCountry:function() {
        
        return Company.findOne({userId:this.userId}).companyCountry;
        },
        companyPhone:function() {
        
        return Company.findOne({userId:this.userId}).companyPhone;
        },
        companySP:function() {
        
        return Company.findOne({userId:this.userId}).companySP;
        },
        companySPImg:function() {
                         Meteor.subscribe('postassets');
                            Meteor.subscribe('images');
                            Meteor.subscribe('companyassets');
                        var file = CompanyAssets.findOne({"companyId":this.userId, "type":"companySPImg"}).filename;
                        
                          return Images.findOne({_id:file}).url();
                          
                          
        },
        about:function() {
        
        return Company.findOne({userId:this.userId}).about;
        },
        url:function() {
        
        return Company.findOne({userId:this.userId}).url;
        },
        email:function() {
        
        return Company.findOne({userId:this.userId}).email;
        },
        twitter:function() {
        
        return Company.findOne({userId:this.userId}).twitter;
        },
        facebook:function() {
        
        return Company.findOne({userId:this.userId}).facebook;
        },
        /* End of ugly code */
        
        asset1: function () {
                //Meteor.subscribe('postassets');
              //  Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[0];
             //return thefiles;
            
        },
         asset2: function () {
               // Meteor.subscribe('postassets');
               // Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[1];
             //return thefiles;
            
        },
         asset3: function () {
                //Meteor.subscribe('postassets');
               // Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[2];
             //return thefiles;
            
        },
         asset4: function () {
              //  Meteor.subscribe('postassets');
              //  Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[3];
             //return thefiles;
            
        } ,
        asset5: function () {
              //  Meteor.subscribe('postassets');
              //  Meteor.subscribe('images');
               // var theid = this.userId;
               // Meteor.subscribe('posts',this.userId);
                   var thefiles = [];
                   PostAssets.find({docId:this.docId}).forEach(
                                            function(files){
                                            
                                               // thefiles.push ("{_id:"+files.filename+"}");
                                                thefiles.push(Images.findOne({_id:files.filename}).url());
                                            
                                            
                                            });
                    
             return thefiles[4];
             //return thefiles;
            
        }
        
});
