Template.pluginContainer.helpers({

title:function(e) {
    switch(this.name) {
        case "plugin1": return "Releases";break;
        case "plugin2": return "Questions";break;
        case "plugin3": return "MVP";break;
        default:break;
    }
},

width:function(e) {
    switch(this.name) {
        case "plugin1": return "48%";break;
        case "plugin2": return "48%";break;
        case "plugin3": return "48%";break;
        default:return "33.3";break;
    }
},

height:function(e) {
    switch(this.name) {
        case "plugin1": return "100%";break;
        case "plugin2": return "50%";break;
        case "plugin3": return "50%";break;
        default:return "33.3%";break;
    }
},
list: function(e) {
    switch(this.name) {
        case "plugin2": return ["{title:list}","{title:list1}"];break;
        
        
    }
    
 }

});
