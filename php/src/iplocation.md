### iplocation

~~~bash
wget http://php-tokyocabinet.googlecode.com/files/php-iplocation.tar.bz2
phpize
./configure --with-php-config=php-config --with-iplocation
make && make install

cp c_p.txt ip.dict
[iplocation]
iplocation.dict = "/root/software/php-iplocation/ip.dict"
extension=iplocation.so
~~~