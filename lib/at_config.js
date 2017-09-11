AccountsTemplates.configure({
    // Behavior
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    //homeRoutePath: myRoutesFunc,
    redirectTimeout: 40000,

    // Hooks
        onSubmitHook: mySubmitFunc,
        //onSignInHook: myLoggedinFunc,
      //onLogoutHook: myLogoutFunc,
    
   // preSignUpHook: myPreSubmitFunc,
    postSignUpHook: mySignUpFunc,
    

    // Texts
    
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});

var myPreSubmitFunc = function(){
    //example redirect after logout
    //Router.go('/welcome');
};


AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name",
    required: true
    //func: function(value){return value !== 'Full Name';},
    //errStr: 'Only "Full Name" allowed!',
});

AccountsTemplates.addField({
    _id: 'accounttype',
    type: 'hidden'
});


 function mySubmitFunc(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
     // Router.go('/profile/'+Meteor.users.findOne()._id);
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
      var whereweat = location.pathname;
      var theid = Meteor.userId();
      
      //console.log(whereweat);
      if(whereweat === "/pressSignup") {
      //  Company.insert(userId:theid,accountType:"influencer");
      console.log("going to Influencer Setup for "+theid);
      Router.go('/influencerSetup/'+theid);
        return '/influencerSetup/'+theid;
      } else {
       // Company.insert(userId:theid,accountType:"marketer");
      console.log("going to Marketer Setup for "+theid);
      Router.go('/marketerSetup/'+theid);
        return '/marketerSetup/'+theid;
        
      
      }
    }
  }
};

function mySignUpFunc(error, state) {
 if (!error) {
    var theid = Meteor.userId;
    if(whereweat === "/pressSignup") {
        console.log("adding "+theid+" to companies");
      //  Company.insert(userId:theid,accountType:"marketer");
        } else {
            console.log("adding "+theid+" to companies");
          //  Company.insert(userId:theid,accountType:"influencer");
        }
  }
};



