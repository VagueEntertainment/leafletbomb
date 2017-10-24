Template.questionItems.helpers({

title:function(e) {
    
        return "Questions";
        
  
},

width:function(e) {
   
       return "48%";
 
},

height:function(e) {
   
        return "50%";
},

questions: function() {
                    
                return PostQuestions.find();
            }


});
