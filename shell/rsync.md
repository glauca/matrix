~~~shell
rsync -avz --progress --cvs-exclude --delete -e "ssh -p 16039 -i /root/.ssh/private_key" root@127.0.0.1:/remote /local
~~~