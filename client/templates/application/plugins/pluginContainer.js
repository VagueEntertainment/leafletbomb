Template.pluginContainer.helpers({

title:function(e) {
    switch(this.name) {
        case "plugin1": return "Questions";break;
        case "plugin2": return "News Story";break;
        case "plugin3": return "MVP";break;
        default:break;
    }
},

width:function(e) {
    switch(this.name) {
        case "plugin1": return "55%";break;
        case "plugin2": return "40%";break;
        case "plugin3": return "33.3";break;
        default:return "33.3";break;
    }
},

height:function(e) {
    switch(this.name) {
        case "plugin1": return "100%";break;
        case "plugin2": return "50%";break;
        case "plugin3": return "45%";break;
        default:return "33.3%";break;
    }
},

});
