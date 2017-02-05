#!/usr/bin/env bash

if [[ -f $1 ]]; then

    accessLog=$1
    echo -e "$accessLog \n"

    # 当前日期
    currentDate=`date '+%F'`
    logFile="/tmp/bannersRequest-$currentDate.log"

    echo `date '+%F %R'` >> $logFile

    tail -100000 $accessLog | awk '{print $7"-"int($10/1024)"k"}' | sort | uniq -c | sort -k1,1nr | head -25 >> $logFile

    # 清空 access.log 文件
    echo '' > $accessLog

    tail -26 $logFile

    # 删除一周前的保存记录
    aWeekAgoDate=`date +'%F' --date='a week ago'`
    aWeekAgoFile="/tmp/bannersRequest-$aWeekAgoDate.log"

    if [[ -f $aWeekAgoFile ]]; then
        rm -f $aWeekAgoFile
    fi

fi
