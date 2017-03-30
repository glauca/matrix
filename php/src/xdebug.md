### xdebug

~~~bash
wget http://xdebug.org/files/xdebug-2.2.4.tgz
phpize
./configure --with-php-config=php-config --enable-xdebug
make && make install

zend_extension=/usr/local/php/lib/php/extensions/no-debug-non-zts-20060613/xdebug.so
               zend_extension=/usr/local/php/lib/php/extensions/no-debug-non-zts-20090626/xdebug.so
xdebug.auto_trace=1
xdebug.cli_color=2
xdebug.show_exception_trace=on
xdebug.dump_undefined=on
~~~