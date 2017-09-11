Router.configure({
    layoutTemplate:'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts');}
    });

Router.route('/login', {name: 'login'});

Router.route('/pressSignup/', {name: 'pressSignup',
                                waitOn: function() { return Meteor.subscribe('companies',"all"),Meteor.subscribe('images');}

});
   
Router.route('/marketerSignup/', {name: 'marketerSignup',
                                    waitOn: function() { return Meteor.subscribe('companies',"all"),Meteor.subscribe('images');}


});
     
Router.route('/', {
            name: 'postsList',
                waitOn: function() { return Meteor.subscribe('posts','all'),Meteor.subscribe('images'),Meteor.subscribe('postassets');}
            }); 
            
Router.route('/release/:docId', {
            name: 'postItem',
                waitOn: function() { return Meteor.subscribe('posts','all'),Meteor.subscribe('images'),Meteor.subscribe('postassets');}
            });             
            
            
            
Router.route('/dashboard/:userId', {
    name: 'marketerDashBoard',
    waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('companyassets'),Meteor.subscribe('influencers'),Meteor.subscribe('distrolist',this.params.userId),Meteor.subscribe('images');}
    });
    
Router.route('/influence/:userId', {
    name: 'influencerDashBoard',
    waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('companyassets'),Meteor.subscribe('images');}
    });    
    
    
    
Router.route('/dashboard/:userId/newPressRelease', {
    name: 'newPressRelease',
    waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('images'),Meteor.subscribe('postassets'),Meteor.subscribe('companyassets');}
    });    
    
Router.route('/profile/:userId' , {
        name: 'profiles',
       // waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('images');}
        
        });
        
Router.route('/welcome', {
        name: 'setup',
        //waitOn: function() { return Meteor.subscribe('companies',this.params.userID);}

    });
    
Router.route('/influencerSetup/:_id', {
        name:'influencerSetup',
         waitOn: function() { return Meteor.subscribe('companies',this.params._id),Meteor.subscribe('images'),Meteor.subscribe('companyassets');}

    });
    
Router.route('/marketerSetup/:_id', {
        name:'marketerSetup',
         waitOn: function() { return Meteor.subscribe('companies',this.params._id),Meteor.subscribe('images'),Meteor.subscribe('companyassets');}

    });               
        
        
