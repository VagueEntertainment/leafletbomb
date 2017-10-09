#!/bin/bash

U=(`gawk  /username=/{print} settings.conf |  tr "=" " "`)
#echo ${U[1]}
P=(`gawk  /password=/{print} settings.conf |  tr "=" " "`)
#echo ${P[1]}
S=(`gawk  /server=/{print} settings.conf |  tr "=" " "`)
#echo ${S[1]}
p=(`gawk  /port=/{print} settings.conf |  tr "=" " "`)
#echo ${p[1]}

export MAIL_URL='smtp://'${U[1]}':'${P[1]}'@'${S[1]}':'${p[1]}

echo $MAIL_URL

meteor
