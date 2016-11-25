#!/usr/bin/env bash

baseDir=/datas/mysql/master-bin.*
destDir=/root/databases/

files=($(ls $baseDir))
length=${#files[*]}

for ((i=0;i<length;i++))
do
    file=${files[i]}
    baseName=$(basename $file)
    destFile=${destDir}${baseName}".sql"
    echo -e $destFile

    # index=${baseName:14}
    # if [ $index -lt 976 ];then
        # continue
    # fi

    # 导出二进制日志
    /usr/local/mysql/bin/mysqlbinlog ${file} > $destFile

    if [ -f "$destFile" ];then
        exist=$(cat ${destFile} | grep -C 10 'webmaster_resource' --color)
        if [ "$exist" ];then
            # sql=$(cat ${file} | grep -w 'webmaster_resource' --color)
            # echo -e "$sql" >> append.sql

            # 查找到了 追加写到文件里面
            cat ${file} | grep -w 'webmaster_resource' --color >> append.sql
            echo -e "Exist In "${$destFile}
        else
            echo -e "rm -f "${$destFile}
        fi

        rm -f $destFile
    fi
done