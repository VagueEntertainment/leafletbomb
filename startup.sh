#!/bin/bash

U=(`gawk  /username=/{print} settings.conf |  tr "=" " "`)
#echo ${U[1]}
P=(`gawk  /password=/{print} settings.conf |  tr "=" " "`)
#echo ${P[1]}
S=(`gawk  /server=/{print} settings.conf |  tr "=" " "`)
#echo ${S[1]}
p=(`gawk  /port=/{print} settings.conf |  tr "=" " "`)
#echo ${p[1]}
sec=(`gawk  /secure=/{print} settings.conf |  tr "=" " "`)

if [ "${sec[1]}" == "true" ]; then 
    serv='smtps'
   else 
    serv='smtp'
    fi

export MAIL_URL=$serv'://'${U[1]}':'${P[1]}'@'${S[1]}':'${p[1]}

echo $MAIL_URL

meteor
