var schedule = later.parse.recur().on(5).minute(); // on fifth minute of every hour, every day
//var hourlyEmailer = new ScheduledTask(schedule, sendHourlyEmails);

Meteor.startup(function () {
  //hourlyEmailer.start();
});
