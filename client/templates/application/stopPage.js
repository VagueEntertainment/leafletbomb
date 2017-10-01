Template.stopPage.helpers({


 searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  company() {
    let companies = Company.find();
    if ( companies ) {
      return companies;
    }
  }


});

Template.stopPage.rendered=function () {

   if (Company.find().count() == 0) {
    console.log("found "+Company.find().count());
    Router.go("/marketerSignup?accounttype=marketer");
    } else if (Company.find().count() == 1) {
    
    Router.go("/"+Company.findOne().companyName);
    } 
    

}

Template.stopPage.events({


'change #mainSearch' : function(e) {
                        
                   var search = $('#mainSearch').val();
                   //var id = Posts.findOne({"title":search}).docId;
                   
                   
                   if(search.trim().length > 0 ) {
                   $('#searcharea').css({'top':'2%'});
                   $('#found').css({'visibility':'visible'});
                   
                   
                   } else {
                    $('#searcharea').css({'top':'20%'});
                    $('#found').css({'visibility':'hidden'});
                    
                   }      
                },
                
                
   'keyup [name="mainSearch"]' ( event, template ) {
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }



});

Template.stopPage.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar();
  template.searching   = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe( 'companies', template.searchQuery.get(), () => {
      setTimeout( () => {
        template.searching.set( false );
      }, 300 );
    });
  });
});
