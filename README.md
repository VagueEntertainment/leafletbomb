# leafletbomb

Installation 

Linux:
  Install Meteor
    curl https://install.meteor.com/ | sh

Install npm if meteor install didn't do it for you.
    sudo apt install npm
    
Setting up email server.
    At the time of writing Meteor's mail subsystem must have the MAIL_URL enviroment variable set. This can not be done while the application is running.
    
    cp settings-sample.conf settings.conf
    
    edit settings.conf with your information
    

Run leaflet bomb by running these commands.
 cd leafletbomb 
 ./startup.sh -or-
 chmod 755 ./startup.sh 
 ./startup.sh

