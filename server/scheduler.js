//var schedule = later.parse.recur().on(5).minute(); // on fifth minute of every hour, every day
var schedule = later.parse.recur().every(5).minute(); // on fifth minute of every hour, every day
var hourlyEmailer = new ScheduledTask(schedule, checkScheduledPosts);

import { Mongo } from 'meteor/mongo';

Meteor.startup(function () {
  hourlyEmailer.start();
});


function checkScheduledPosts() {

 // var test = db.companies.findOne()._id;
  
  
  //console.log("this is the company id "+test);


}
