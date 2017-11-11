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
    hideSignUpLink:true,

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
    required: true,
    negativeValidation: true,
    continuousValidation: true,
   // func: function(value){
     //   var name = CompanyTeam.find({_id:Router.current().params.query.memeber}).name;
    
    //return value !== name;},
    errStr: 'Only "Full Name" allowed!',
});


AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    placeholder: {
        signUp: "Enter a valid email address"
    },
    required: true,
}); 

AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    placeholder: {
        signUp: "At least six characters"
    },
    required: true,
    minLength: 6,
   // re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
  //  errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
}); 



AccountsTemplates.addField({
    _id: 'accounttype',
    type: 'hidden'
});


 function mySubmitFunc(error, state){
  if (!error) {
    if (state === "signIn") {
      console.log( "Successfully logged in");
      if(Company.findOne() == undefined) {
        var theid = Meteor.userId();
        Router.go('/marketerSetup/'+theid);
      } else {
        return '/dashboard/'+Company.findOne().userId;      
        Router.go('/dashboard/'+Company.findOne().userId);
      }
      
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
      var whereweat = location.pathname;
      var theid = Meteor.userId();
      
      console.log(whereweat);
      if(whereweat === "/pressSignup") {
      //  Company.insert(userId:theid,accountType:"influencer");
      console.log("going to Influencer Setup for "+theid);
      Router.go('/influencerSetup/'+theid);
        return '/influencerSetup/'+theid;
      } else {
       // Company.insert(userId:theid,accountType:"marketer");
      console.log("going to Marketer Setup for "+theid);
      
      if(Router.current().params.query.company == undefined) {
      Router.go('/marketerSetup/'+theid);
        return '/marketerSetup/'+theid;
      } else {
        Router.go('/dashboard/'+Router.current().params.query.company);
        console.log("going to" + Router.current().params.query.company);
        return '/dashboard/'+Router.current().params.query.company;
      }  
      
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



