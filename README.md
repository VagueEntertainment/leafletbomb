![](http://leafletbomb.io/wp-content/uploads/2017/10/Export_1.png)

[![Join the chat at https://riot.im/app/#/room/#leafletbomb:matrix.org](https://img.shields.io/badge/riot.im-join_chat-green.svg)](https://riot.im/app/#/room/#leafletbomb:matrix.org)

Leaflet Bomb is an open source PR & Marketing platform designed to help organizations share their message.

You can find detailed information for installation and setup [over at our Wiki](https://github.com/LeafletBomb/leafletbomb/wiki)

#### Quick Guide to Getting started on Ubuntu/elementaryOS

Install Node.js and npm, [downloads available here](https://nodejs.org/en/download/)

Install Meteor:
    
`curl https://install.meteor.com/ | sh`
    
Setting up email server:
    
At the time of writing Meteor's mail subsystem must have the MAIL_URL enviroment variable set. This can not be done while the application is running.
    
`cp settings-sample.conf settings.conf`
    
Edit settings.conf with your information
    
Run leaflet bomb by running these commands.
 cd leafletbomb 
 ./startup.sh
