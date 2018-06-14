### Installing PHP

~~~bash
yum install wget pcre openssl* && \
yum -y install gcc gcc-c++ autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel libidn libidn-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers make cmake && \
yum -y install gd gd2 gd-devel gd2-devel man vim

yum install -y icu libicu libicu-devel
yum install readline-devel
yum install net-snmp net-snmp-devel
yum install gmp-devel

cp -frp /usr/lib64/libldap* /usr/lib/
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
--with-ldap \
--with-openssl \
--with-gmp \
--with-curl \
--enable-sockets \
--enable-mysqlnd \
--enable-gd-native-ttf \
--enable-soap \
--enable-zip \
--enable-fpm \
--enable-exif \
--enable-opcache \
--enable-shared \
--enable-bcmath \
--enable-exif

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