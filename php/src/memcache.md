### Memcache

~~~bash
wget https://github.com/downloads/libevent/libevent/libevent-2.0.21-stable.tar.gz
./configure
make && make install

# 安装Memcached
wget http://www.memcached.org/files/memcached-1.4.17.tar.gz
./configure --with-libevent
make && make install

/usr/local/memcached/bin/memcached -d -m 128 -l localhost -p 11211 -u root

# -d 以守护程序（daemon）方式运行 memcached；
# -m 设置 memcached 可以使用的内存大小, 单位为 M
# -l 设置监听的 IP 地址, 如果是本机的话, 通常可以不设置此参数
# -p 设置监听的端口, 默认为 11211, 所以也可以不设置此参数
# -u 指定用户

# PHP Memcache
wget http://pecl.php.net/get/memcache-2.2.7.tgz
tar -zxvf memcache-2.2.7.tgz
cd memcache-2.2.7
phpize
./configure --with-php-config=php-config --enable-memcache --with-zlib-dir
make && make install

# 安装完后会有类似这样的提示
Installing shared extensions: /usr/local/php/lib/php/extensions/no-debug-non-zts-20060613/
# 修改php.ini
extension_dir = "/usr/local/php/lib/php/extensions/no-debug-non-zts-20060613/"
extension=memcache.so
~~~
