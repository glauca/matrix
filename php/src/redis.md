### Redis

~~~bash
wget http://download.redis.io/redis-stable.tar.gz
tar zxvf redis-stable.tar.gz
make
make test
/usr/local/redis/src/redis-server /usr/local/redis/redis.conf

//=============================================================== PHP Resis
wget http://pecl.php.net/get/redis-2.2.4.tgz
phpize
./configure --with-php-config=php-config --enable-redis
make && make install
extension=redis.so
~~~
