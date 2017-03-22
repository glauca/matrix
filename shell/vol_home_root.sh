~~~shell

# 首先查看磁盘使用情况
df -h

# 卸载/home 如果提示无法卸载 则是有进程占用/home 使用如下命令来终止占用进程 fuser -m /home
umount /home

# 调整分区大小
resize2fs -p /dev/mapper/VolGroup-lv_home 20G
e2fsck -f /dev/mapper/VolGroup-lv_home

# 挂载上/home
mount /home
df -h

# 设置空闲空间 lvreduce -L 20G 的意思为设置当前文件系统为20G lvreduce -l 20G 是指从当前文件系统上减少20G
lvreduce -L 20G /dev/mapper/VolGroup-lv_home

# 把闲置空间挂在到根目录下 lvextend -L +283G 为在文件系统上增加283G
lvextend -L +283G /dev/mapper/VolGroup-lv_root
resize2fs -p /dev/mapper/VolGroup-lv_root

df -h
~~~