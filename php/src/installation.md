### Installing PHP

~~~bash
yum install -y icu libicu libicu-devel
yum install readline-devel
yum install net-snmp net-snmp-devel
~~~

~~~bash
./configure --with-mysqli \
--with-freetype-dir \
--with-jpeg-dir \
--with-png-dir \
--with-zlib-dir \
--with-xpm-dir \
--with-gd \
--with-mhash \
--enable-intl \
--enable-mbstring \
--with-pdo-mysql \
--with-readline \
--with-snmp \
--with-libxml-dir \
--enable-sockets \
--enable-mysqlnd \
--enable-gd-native-ttf \
--enable-soap \
--enable-zip \
--enable-fpm \
--enable-exif \
--enable-shared

make && make install

cp php.ini-production /usr/local/php/php.ini
cp /usr/local/etc/php-fpm.conf.default /usr/local/etc/php-fpm.conf
cp sapi/fpm/php-fpm /usr/local/bin

# 将 php.ini 文件中的配置项 cgi.fix_pathinfo 设置为 0
vim /usr/local/php/php.ini

cgi.fix_pathinfo=0

# 确保 php-fpm 模块使用 www 用户和 www 用户组的身份运行
vim /usr/local/etc/php-fpm.conf

user = www
group = www

# 配置 Linux 服务
cp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
chmod +x /etc/init.d/php-fpm
chkconfig --level 345 php-fpm on
service php-fpm start
~~~