~~~shell
dd if=/dev/zero of=/home/swap bs=1024 count=1024000

/sbin/mkswap /home/swap

/sbin/swapon /home/swap

/home/swap              swap                    swap    defaults        0 0
~~~