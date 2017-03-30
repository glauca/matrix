### Memcached

~~~bash
wget https://launchpad.net/libmemcached/1.0/1.0.16/+download/libmemcached-1.0.16.tar.gz
./configure -with-memcached
make && make install
// 安装出错 看情况安装libevent-devel
yum install libevent*

wget http://pecl.php.net/get/memcached-2.1.0.tgz
phpize
./configure --with-php-config=php-config --with-libmemcached-dir --with-zlib-dir --enable-memcached --enable-memcached-igbinary --enable-memcached-json
make && make install
extension=memcached.so
~~~
