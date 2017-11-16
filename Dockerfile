# Pull from the latest ubuntu image
FROM ubuntu:latest

# install some dependencies
RUN apt-get update && \
    apt-get install -y \
    curl \
    bzip2


# install nodejs repo
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

# install nodejs
RUN apt-get install -y nodejs

# check for npm
RUN npm -v

# create leafletbomb user
RUN adduser leafletbomb

# change to leafletbomb user
USER leafletbomb

# install meteor
RUN curl https://install.meteor.com/ | sh

# change to root user
USER root 

# copy meteor executable
RUN  cp "/home/leafletbomb/.meteor/packages/meteor-tool/1.6.0/mt-os.linux.x86_64/scripts/admin/launch-meteor" /usr/bin/meteor

# clean up apt lists
RUN rm -Rf /var/lib/apt/lists/*

# copy this project to the source directory
COPY . /project/src

# chown these dirs to the leafletbomb user
RUN chown -Rvf leafletbomb:leafletbomb /project

# change back to the leafletbomb user
USER leafletbomb

# change working dir to source directory
WORKDIR /project/src



# run meteor build
RUN meteor build ../dist/

# look for tarbal
RUN ls ../dist
