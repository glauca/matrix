#!/usr/bin/env bash

if [[ -f $1 ]]; then

    filename=$1
    echo -e "$filename \n"

    tail -10000 $filename | awk '{print $7}' | sort | uniq -c | sort -k1,1nr | head -10

fi
